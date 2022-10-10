import axios from 'axios'
import styled from "styled-components"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import Footer from "../components/Footer.js"

export default function SeatsPage({setUserData, movie, setMovie}) {
    const [seats, setSeats] = useState([]) //armazena o mapa de assentos vindo da api
    const [name, setName] = useState("")       //armazena o nome,
    const [cpf, setCpf] = useState("")        //cpf e  
    const [ticket, setTicket] = useState([]) //assentos reservados para emitir o ingresso 
    const {idSessao} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        console.log("dentro")

        promise.then((res) => {
            setSeats(res.data.seats)
            setMovie(res.data)
        })

        promise.catch((erro) => {
            console.log(erro.response.data)
        })
    }, [])

    function selectSeat(props) {

        let id = props.id
        let ready = props.isAvailable

        switch (ready) {
            case false: //assento indisponivel
                alert("Esse assento não está disponível")
            case true:
                if (!ticket.includes(id)) { //assento disponível vira selecionado
                    const newTicket = id
                    setTicket([...ticket, newTicket])
                } else if (ticket.includes(id)) { //assento selecionado vira disponivel
                    const removeTicket = ticket.filter((t) => t !== id)
                    setTicket(removeTicket)
                }
        }
    }

    function bookSeat(event) {
        event.preventDefault();

        const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many'

        const body = {
            ids: { ticket },
            name: { name },
            cpf: { cpf }
        }

        const promise = axios.post(URL, body)

        promise.then((res) => {
            setUserData({movie, body})
            alert("Ingresso reservado")
            console.log(res.data)
            navigate("/sucesso")
        })

        promise.catch((erro) => {
            console.log(erro.message)
        })
    }

    return (
        <>
            <Seats>
                <p> Selecione o(s) assento(s) </p>

                <SeatMap>
                    {seats.map((s) => s.isAvailable ? <div key={s.id} data-identifier="seat" className={ticket.includes(s.id) ? 'selected' : 'available'} onClick={() => selectSeat(s)} >{s.name}</div>
                        : <div key={s.id} data-identifier="seat" className='unavailable' onClick={() => selectSeat(s)}>{s.name}</div>)}

                </SeatMap>

                <Label>
                    <div className='selected' data-identifier="seat-selected-subtitle"></div>
                    <div className='available' data-identifier="seat-available-subtitle"></div>
                    <div className='unavailable' data-identifier="seat-unavailable-subtitle"></div>
                </Label>

                <Details>
                    <p>Selecionado</p>
                    <p>Disponível</p>
                    <p>Indisponível</p>
                </Details>

                <form onSubmit={bookSeat}>
                    <label htmlFor='name'> Nome do comprador: </label>
                    <input
                        name="name"
                        value={name}
                        id="name"
                        type="text"
                        required
                        onChange={e => setName(e.target.value)}
                        placeholder="Digite seu nome..."
                        data-identifier="buyer-name-input"
                    />
                    <label htmlFor='cpf'> CPF do comprador: </label>
                    <input
                        name="cpf"
                        value={cpf}
                        id="cpf"
                        type="number"
                        required
                        onChange={e => setCpf(e.target.value)}
                        placeholder="Digite seu CPF..."
                        data-identifier="buyer-cpf-input"
                    />

                    <Button type="submit" data-identifier="reservation-btn">Reservar assento(s)</Button>
                </form>
            </Seats>

            <Footer movie={movie} />

        </>
    )
}

const Seats = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;

    p {
        margin: 40px auto 20px auto;
        font-size: 24px;
    }

    form {
        margin-left: 24px;
        margin-top: 30px;
        font-family: Roboto, sans-serif;
        
        label {
            font-size: 18px;
        }

        input {
            width: 327px;
            height: 41px;
            border: 1px solid #D4D4D4;
            border-radius: 5px;
            margin-top: 5px;
            margin-bottom: 10px;
            padding-left: 18px;

            ::placeholder{
                color: #AFAFAF;
                font-style: italic;
                font-size: 18px;
            }
        }
    }
`;

const SeatMap = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    justify-content: center;

    div {
        width: 26px;
        height: 26px;
        border: 1px solid #808F9D;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 4px 18px 4px;
        font-size: 11px;
    }

    .available {
        background-color: #C3CFD9;
        border: 1px solid #808F9D;
    }

    .unavailable {
        background-color: #FBE192;
        border: 1px solid #F7C52B;
    }

    .selected {
        background-color: #1AAE9E;
        border: 1px solid #0E7D71;
    }
`;

const Label = styled(SeatMap)`
    width: 100%;
    height: 100px;
    justify-content: space-evenly;
`;

const Details = styled(SeatMap)`
    width: 100%;
    justify-content: space-evenly;

    p {
        margin: 0;
        font-size: 13px;
        color: #4E5A65;
    }
`;

const Button = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border: none;
    border-radius: 3px;
    text-decoration: none;
    font-size: 18px;
    color: white;
    margin: 30px 0 0 60px;
`;
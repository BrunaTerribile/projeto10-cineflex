import axios from 'axios'
import styled from "styled-components"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function SeatsPage() {
    const [seats, setSeats] = useState([]) //armazena o mapa de assentos vindo da api
    const {idSession} = useParams()

    const [name, setName] = useState("") //armazena o nome, cpf e assentos reservados para emitir o ingresso 
    const [cpf, setCpf] = useState("")
    const [ticket, setTicket] = useState([])
    console.log("fora da func", ticket)

    const navigate = useNavigate()

    //console.log(idSession)

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/51/seats`)

        promise.then((res) => {
            setSeats(res.data.seats)
            console.log("sessão escolhida:")
            console.log(res.data.seats)
        })

        promise.catch((erro) => {
            console.log(erro.response.data)
        })
    }, [])

    function selectSeat(props) {
        //event.preventDefault();

        let id = props.id
        let ready = props.isAvailable
        
        switch(ready){
            case false: //assento indisponivel
                alert("Esse assento não está disponível")
            case true:
                if (!ticket.includes(id)){ //assento disponível vira selecionado
                    const newTicket = id
                    setTicket([...ticket, newTicket])
                    console.log(ticket)
                } else if (ticket.includes(id)){ //assento selecionado vira disponivel
                    const removeTicket = ticket.filter((t) => t !== id)
                    setTicket(removeTicket)
                    console.log(ticket)
                }
        }
    }

    function bookSeat(){
    
        //navigate("/sucesso")
    }

    return (
        <>
            <Seats>
                <p> Selecione o(s) assento(s) </p>

                <SeatMap>
                    {seats.map((s) => s.isAvailable ? <div key={s.id} className={ticket.includes(s.id) ? 'selected' : 'available'} onClick={() => selectSeat(s)} >{s.name}</div> 
                                                    : <div key={s.id} className='unavailable' onClick={() => selectSeat(s)}>{s.name}</div>)}

                </SeatMap>

                <Label>
                    <div className='selected'></div> 
                    <div className='available'></div> 
                    <div className='unavailable'></div>
                </Label>

                <Details>
                    <p>Selecionado</p>
                    <p>Disponível</p>
                    <p>Indisponível</p>
                </Details>

                <form onSubmit={bookSeat}>
                    <label for="name"> Nome do comprador: </label>
                    <Input
                        name="name"
                        value={name}
                        id="name"
                        type="text"
                        required 
                        onChange={e => setName(e.target.value)}
                        ></Input>
                    <label for="cpf"> CPF do comprador: </label>
                    <Input
                        name="cpf"
                        value={cpf}
                        id="cpf"
                        type="number"
                        required 
                        onChange={e => setCpf(e.target.value)}
                        ></Input>

                    <Button type="submit">Reservar assento(s)</Button>
                </form>
            </Seats>

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
        margin: 40px auto;
        font-size: 24px;
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
        margin: 9px 4px;
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

const Input = styled.div`
    width: 327px;
    height: 51px;
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
`;
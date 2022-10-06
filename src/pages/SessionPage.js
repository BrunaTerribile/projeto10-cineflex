import axios from 'axios'
import styled from "styled-components"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import Footer from "../components/Footer.js"

export default function SessionPage() {
    const [movie, setMovie] = useState([])
    const {idFilme} = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

        promise.then((res) => {
            setMovie(res.data.days)
            console.log(res.data.days)
        })

        promise.catch((erro) => {
            console.log(erro.response.data)
        })
    }, [])

    return (
        <>
            <Sessions>
                <p> Selecione o horário </p>
                <Info>
                {movie.map((d) =>
                    <Day><span>{d.weekday} - {d.date}</span></Day>)}
                </Info>
            </Sessions>
            <Footer></Footer>
        </>
    )
}

const Sessions = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: column;
    margin-top: 67px;

    p {
        margin: 40px auto;
        font-family: Roboto, sans-serif;
        font-size: 24px;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 25px;

    img {
        width: 100px;
        height: 100px;
    }
`;

const Day = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 25px;

    span {
        margin-left: 25px;
        font-family: Roboto, sans-serif;
        font-size: 20px;
    }
`;

const Time = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 25px;
    padding-bottom: 25px;

    .box{
        width: 83px;
        height: 43px;
        background-color: #E8833A;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        font-family: Roboto, sans-serif;
        font-size: 18px;
        color: white;
    }
`;

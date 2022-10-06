import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

export default function SeatsPage() {
    const [seats, setSeats] = useState([])
    const {idSession} = useParams()
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`)

        promise.then((res) => {
            setSeats(res.data)
            console.log("sessão escolhida:")
            console.log(res.data)
        })

        promise.catch((erro) => {
            console.log(erro.response.data) 
        })
    }, [])
    
    
    return SeatsPage
}
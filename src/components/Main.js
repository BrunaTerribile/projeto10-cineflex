import styled from "styled-components"
import { useState, useEffect } from "react"
import axios from 'axios'


export default function Main() {
    const [poster, setPoster] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(resposta => {
            let posterArr = resposta.data
            setPoster(posterArr)

        promise.catch(erro => {
            console.log(erro.response.data)
            });
        })

    }, []);
      
    return (
        <FirstStep>
            <p> Selecione o filme </p>
            <Movies>
                {poster.map((m) => <Poster><img src={m.posterURL} alt="poster de filme"/></Poster>)}
            </Movies>
        </FirstStep>
    )
}

const FirstStep = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;

    p {
        margin: 40px auto;
        font-family: Roboto, sans-serif;
        font-size: 24px;
    }
`;

const Movies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-bottom: 25px;
`;

const Poster = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 129px;
        height: 193px;
    }
`;
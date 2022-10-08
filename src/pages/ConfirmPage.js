import styled from "styled-components"
import { Link } from "react-router-dom";

export default function ConfirmPage({userData}) {
    
    console.log("recebi:", {userData})

    let user = userData.body
    let movieInfo = userData.movie

    console.log(user)
    console.log(movieInfo)

    function slice(t){
        let seat = (t % 100)
        return <p>Assento {seat} </p>
    }

    return (
        <Confirm>
            <Sucess> <p>Pedido feito com sucesso! </p> </Sucess>

            <MovieInfo>
                <Title> Filme e sessão </Title>
                <p>{movieInfo.movie.title}</p>
                <p>{movieInfo.day.date}  {movieInfo.name}</p>

                <Title> Ingressos </Title>
                {user.ids.ticket.map(slice)}

                <Title> Comprador </Title>
                <p>Nome: {user.name.name}</p>
                <p>CPF: {user.cpf.cpf}</p>
            </MovieInfo>

            <Button><Link to={`/`}> Voltar pra Home</Link></Button>
        </Confirm>
    )

}

const Confirm = styled.div`
    width: 100%;
    margin-top: 67px; 
`;

const Sucess = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    
    p {
        font-size: 24px;
        font-weight: 700;
        color: #247A6B;
        margin: 0 120px;
        text-align: center;
    }
`;

const MovieInfo = styled.div`
    width: 100%;
    padding-left: 28px;

    p {
        font-size: 22px;
        font-weight: 400;
        color: #293845;
        margin-bottom: 5px;
    }
`;

const Title = styled.div`
    width: 100%;
    font-size: 24px;
    font-weight: 700;
    color: #293845;
    margin-top: 40px;
    margin-bottom: 10px;
`;

const Button = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border: none;
    border-radius: 3px;
    font-size: 18px;
    color: red;
    margin: 60px 0 0 85px;
`;
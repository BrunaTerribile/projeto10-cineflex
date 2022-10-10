import styled from "styled-components"
import { Link } from "react-router-dom";

export default function ConfirmPage({userData}) {
    
    let user = userData.body
    let movieInfo = userData.movie

    function slice(t){
        let seat = (t % 100)
        return <p key={t.id} >Assento {seat} </p>
    }

    function formatCPF(cpf){
        cpf = cpf.replace(/[^\d]/g, "") //retira os caracteres indesejados
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") //realizar a formatação
    }

    return (
        <Confirm>
            <Sucess> <p>Pedido feito com sucesso! </p> </Sucess>

            <MovieInfo>
                <Title data-identifier="movie-session-infos-reserve-finished"> Filme e sessão </Title>
                <p>{movieInfo.movie.title}</p>
                <p>{movieInfo.day.date}  {movieInfo.name}</p>

                <Title data-identifier="seat-infos-reserve-finished"> Ingressos </Title>
                {user.ids.ticket.map(slice)}

                <Title data-identifier="buyer-infos-reserve-finished"> Comprador </Title>
                <p>Nome: {user.name.name}</p>
                <p>CPF: {formatCPF(user.cpf.cpf)}</p>
            </MovieInfo>

            <Button><Link to={`/`} data-identifier="back-to-home-btn"> Voltar pra Home</Link></Button>
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
import styled from "styled-components"

export default function ConfirmPage() {
    return (
        <Confirm>
            <Sucess> Pedido feito com sucesso! </Sucess>

            <MovieInfo>
                <Title> Filme e sessão </Title>
            </MovieInfo>

            <MovieTickets>
                <Title> Ingressos </Title>
            </MovieTickets>

            <MovieCustomer>
                <Title> Comprador </Title>
            </MovieCustomer>

            <Link to=""> Voltar pra Home</Link>
        </Confirm>
    )

}

const Confirm = styled.div`
    width: 100%;
`;

const Sucess = styled.div`
    width: 100%;
`;

const MovieInfo = styled.div`
    width: 100%;
`;

const MovieTickets = styled.div`
    width: 100%;
`;

const MovieCustomer = styled.div`
    width: 100%;
`;

const Title = styled.div`
    width: 100%;
`;

const Link = styled.div`
    width: 100%;
`;
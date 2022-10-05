import styled from "styled-components"

export default function Header() {
    return (
        <Head> <p>CINEFLEX</p> </Head>
    )
}

const Head = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;

    p {
        font-family: Roboto, sans-serif;
        font-size: 34px;
        color: #E8833A;
        margin: auto;
    }

`;
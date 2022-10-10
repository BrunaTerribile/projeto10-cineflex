import styled from "styled-components"

export default function Footer({movie}) {

    console.log("recebi", movie)
    let selectedDay = movie.day
    let selectedMovie = movie.movie

    return (
        <Ticket>
            <Poster data-identifier="movie-img-preview">
                {selectedMovie ? <img src={selectedMovie.posterURL} alt="poster do filme"/> : <img src={movie.posterURL} alt="poster do filme"/>}
            </Poster>
            <Title data-identifier="movie-and-session-infos-preview"> 
                {selectedMovie ? <div>{selectedMovie.title}</div> : <div>{movie.title}</div>}
                {selectedDay ? <div> {selectedDay.weekday} - {movie.name}</div> : ""}
            </Title>
        </Ticket>
    )  
}

const Ticket = styled.div`
    width: 100%;
    height: 117px;
    background-color: #DFE6ED;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
`;

const Poster = styled.div`
    width: 64px;
    height: 89px;
    margin-left: 25px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 48px;
        height: 72px;
    }
`;

const Title = styled.div`
    font-size: 24px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    color: #293845;
`;
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import SessionPage from "./pages/SessionPage"
import SeatsPage from "./pages/SeatsPage"
import ConfirmPage from "./pages/ConfirmPage"
import GlobalStyle from './styles/globalStyles'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {
  const [userData, setUserData] = useState([])
  const [movie, setMovie] = useState([])

  return (
    <BrowserRouter>
      <GlobalStyle />

      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sessoes/:idFilme" element={<SessionPage movie={movie} setMovie={setMovie}/>} />
        <Route path="/assentos/:idSessao" element={<SeatsPage setUserData={setUserData} userData={userData} movie={movie} setMovie={setMovie}/>} />
        <Route path="/sucesso" element={<ConfirmPage userData={userData}/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
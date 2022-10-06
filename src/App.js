import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import SessionPage from "./pages/SessionPage"
import SeatsPage from "./pages/SeatsPage"
import ConfirmPage from "./pages/ConfirmPage"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/sessoes/:idFilme" element={<SessionPage/>}/>
        <Route path="/assentos/:idSessao" element={<SeatsPage/>}/>
        <Route path="/sucesso" element={<ConfirmPage/>}/>
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
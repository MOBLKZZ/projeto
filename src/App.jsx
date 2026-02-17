import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Cadastro />} />
                <Route path="/login" element={<Login />}/>
            </Routes>
        </>
    )
}

export default App
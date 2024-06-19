import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "./Components/Container/Container";
import { Inicio } from "./pages/Inicio/Inicio";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import EstoqueProvider from "./Contextos/Estoque";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Container>
                <EstoqueProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                    </Routes>
                </EstoqueProvider>
            </Container>
        </BrowserRouter>
    )
}
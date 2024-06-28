import { useContext } from 'react';
import { EstoqueContext } from '../Contextos/Estoque';

export function useEstoqueContext() {
    const { estoque, setEstoque } = useContext(EstoqueContext);

    const adicionarEstoque = (novoEstoque: {
        id: number;
        nome: string;
        quantidade: number;
        local: string;
        categoria: string;
        imagem?: string;
    }) => {
        setEstoque(prevEstoque => [...prevEstoque, novoEstoque]);
    }
    return { adicionarEstoque, setEstoque, estoque };
}

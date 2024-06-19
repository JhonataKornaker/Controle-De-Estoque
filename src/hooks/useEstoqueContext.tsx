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
        //const estoqueRepetido = estoque.some(item => item.id === novoEstoque.id);

        //if (!estoqueRepetido) {
            setEstoque(prevEstoque => [...prevEstoque, novoEstoque]);
        //}
    };

    /*const buscarEstoque = (id: number) => {
        return estoque.find(item => item.id === id);
    };*/

    /*const obterEstoqueTotal = () => {
        return estoque;
    };*/

    return { adicionarEstoque, setEstoque, estoque };
}

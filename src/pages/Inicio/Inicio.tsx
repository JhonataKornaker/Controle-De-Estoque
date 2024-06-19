import { useState } from "react";
import { Pesquisar } from "../../Components/Pesquisar/Pesquisar";
import { ModalImagem } from "../../Components/Modal/ModalImagem/ModalImagem";
import { CirclePlus, Trash } from "lucide-react";
import { ModalEditar } from "../../Components/Modal/ModalEditar/ModalEditar";
import { Link } from "react-router-dom";
import { useEstoqueContext } from "../../hooks/useEstoqueContext";
import { Cabecalho } from "../../Components/Cabecalho/Cabecalho";

/*interface Itens {
    id: number,
    nome: string,
    quantidade: number,
    local: string,
    categoria: string,
    //imagem: string,
}*/

export function Inicio() {
    const [pesquisar, setPesquisar] = useState<string>('');
    const { estoque, setEstoque } = useEstoqueContext();

    const excluirItens = (id: number) => {
        const novosItens = estoque.filter(item => item.id !== id)
        setEstoque(novosItens)
        console.log(novosItens);
    }

    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center pb-16">
            <Cabecalho>
                Lista De Estoque
            </Cabecalho>
            <Pesquisar pesquisar={pesquisar} setPesquisar={setPesquisar} />
            <div className="flex-grow overflow-auto">
                {estoque && estoque.length > 0 ? (
                    estoque
                        .filter((item) =>
                            item.nome.toLowerCase().includes(pesquisar.toLowerCase())
                        )
                        .map((itens) => (
                            <div
                                key={itens.id}
                                className="flex justify-between items-center rounded-lg bg-slate-50 shadow-2xl w-[380px] my-2"
                            >
                                <ModalImagem src={itens.imagem} />
                                <div className="flex flex-col justify-between items-center my-1 w-[250px] h-[150px]">
                                    <span className="font-bold ps-2 border rounded-md w-44 text-center">
                                        {itens.nome}
                                    </span>
                                    <span className="font-bold ps-2 border rounded-md w-44 text-center">
                                        {itens.quantidade}
                                    </span>
                                    <span className="font-bold ps-2 border rounded-md w-44 text-center">
                                        {itens.local}
                                    </span>
                                    <span className="font-bold ps-2 border rounded-md w-44 text-center">
                                        {itens.categoria}
                                    </span>
                                </div>
                                <div className="flex gap-2 me-2 mt-1 self-start">
                                    <button
                                        onClick={() => {
                                            excluirItens(itens.id);
                                        }}
                                        aria-label="apagar"
                                    >
                                        <Trash className="text-red-600" />
                                    </button>
                                    <ModalEditar estoque={estoque} setEstoque={setEstoque} id={itens.id} />
                                </div>
                            </div>
                        ))
                ) : (
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-center text-black font-bold">
                            Você não tem nenhum item cadastrado!
                        </div>
                    </div>
                )}
            </div>
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8" aria-label="adicionar">
                <Link className="flex gap-1 border p-2 rounded-lg" to="/cadastro">
                    <CirclePlus className="text-green-950 size-6" />
                    Cadastrar
                </Link>
            </button>
        </div>
    );
}
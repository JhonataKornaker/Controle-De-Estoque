import { useEffect, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog";
import { Edit, X } from "lucide-react";
import { useForm } from "react-hook-form";

interface Itens {
    id: number,
    nome: string,
    quantidade: number,
    local: string,
    categoria: string,
    imagem?: string
}

interface ModalEitarProps {
    readonly id: number,
    readonly estoque: Itens[],
    readonly setEstoque: React.Dispatch<React.SetStateAction<Itens[]>>
}

export function ModalEditar({ id, estoque, setEstoque }: ModalEitarProps) {

    const [isOpen, setIsOpen] = useState(false)
    const { register, handleSubmit, reset } = useForm<Itens>()

    useEffect(() => {
        if (isOpen) {
            console.log(id)
            const item = estoque.find(item => item.id === id)
            reset(item)
        }
    }, [id, estoque, reset, isOpen]
    )

    const onSubmit = (dados: Itens) => {
        const dadosItem = estoque.find((item) => item.id === dados.id)
        if (dadosItem) {
            const dadosAtualizados: Itens = {
                ...dadosItem,
                nome: dados.nome !== dadosItem.nome ? dados.nome : dadosItem.nome,
                quantidade: dados.quantidade !== dadosItem.quantidade ? dados.quantidade : dadosItem.quantidade,
                local: dados.local !== dadosItem.local ? dados.local : dadosItem.local,
                categoria: dados.categoria !== dadosItem.categoria ? dados.categoria : dadosItem.categoria,
            }
            const novoItensAtulizados = estoque.map((item) => (item.id === dadosAtualizados.id ? dadosAtualizados : item))
            setEstoque(novoItensAtulizados)
        } else {
            console.error('Item não encontrado');
        }
        setIsOpen(false)
    }

    return (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
                <button aria-label='editar'>
                    <Edit />
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md">
                    <Dialog.Close className="flex ml-auto">
                        <X className="text-red-600"/>
                    </Dialog.Close>
                    <Dialog.Title className="flex justify-center text-lg font-bold mb-4">
                        Edição dos itens
                    </Dialog.Title>
                    <form className="flex flex-col gap-1"
                        onSubmit={handleSubmit(onSubmit)}>
                        <label className="font-bold" htmlFor="nome">Nome</label>
                        <input
                            className="w-[250px] p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="nome"
                            {...register('nome')}
                        />
                        <label className="font-bold" htmlFor="quantidade">Quantidade</label>
                        <input
                            className="w-[250px] p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number"
                            id="quantidade"
                            {...register('quantidade')}
                        />
                        <label className="font-bold" htmlFor="local">Local</label>
                        <input
                            className="w-[250px] p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="local"
                            {...register('local')}
                        />
                        <label className="font-bold" htmlFor="categoria">Categoria</label>
                        <input
                            className="w-[250px] p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="categoria"
                            {...register('categoria')}
                        />
                        <button
                            className="mt-6 border border-gray-500 rounded-lg"
                            type="submit">
                            Salvar
                        </button>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
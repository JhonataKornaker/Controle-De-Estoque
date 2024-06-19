import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface itens {
    id: number,
    nome: string,
    quantidade: number,
    local: string,
    categoria: string,
    imagem?: string,
}

interface EstoqueContextType {
    estoque: itens[]
    setEstoque: Dispatch<SetStateAction<itens[]>>
}

export const EstoqueContext = createContext<EstoqueContextType>({
    estoque: [],
    setEstoque: () => {}
});

export default function EstoqueProvider({ children }: {children: ReactNode}) {
    const [estoque, setEstoque] = useState<itens[]>([])
    return (
        <EstoqueContext.Provider value={{ estoque, setEstoque }}>
            {children}
        </EstoqueContext.Provider>
    )
}

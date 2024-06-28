import { Dispatch, ReactNode, SetStateAction, createContext, useMemo, useState } from "react";

interface Itens {
    id: number,
    nome: string,
    quantidade: number,
    local: string,
    categoria: string,
    imagem?: string,
}

interface EstoqueContextType {
    estoque: Itens[]
    setEstoque: Dispatch<SetStateAction<Itens[]>>
}

interface EstoqueProviderProps {
    readonly children: ReactNode;
}

export const EstoqueContext = createContext<EstoqueContextType>({
    estoque: [],
    setEstoque: () => {}
});

export default function EstoqueProvider({ children }: EstoqueProviderProps) {
    const [estoque, setEstoque] = useState<Itens[]>([])
    
    const value = useMemo(() => ({ estoque, setEstoque }), [estoque, setEstoque]);

    return (
        <EstoqueContext.Provider value={value}>
            {children}
        </EstoqueContext.Provider>
    )
}

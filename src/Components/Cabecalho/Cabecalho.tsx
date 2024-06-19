import { ReactNode } from "react";

interface CabecalhoProps {
  children: ReactNode;
}

export function Cabecalho({ children }: Readonly<CabecalhoProps>) {
  return <h1 className="flex justify-center text-2xl font-bold">{children}</h1>;
}

import { Search } from "lucide-react";

interface pesquisarProps {
  pesquisar: string,
  setPesquisar: (pesquisar: string) => void
}

export function Pesquisar({pesquisar, setPesquisar}: pesquisarProps) {
  return (
      <div className="relative my-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-gray-500" />
        </div>
        <input
          type="text"
          className="pl-10 pr-3 py-0 w-[380px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Pesquisar..."
          value={pesquisar}
          onChange={(e) => setPesquisar(e.target.value)}
        />
      </div>
  );
}

import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

export function Container({ children }: Readonly<ContainerProps>) {
    return (
        <main className="container mx-auto p-4 overflow-x-hidden flex flex-col justify-center items-center">
            {children}
        </main>
    );
}

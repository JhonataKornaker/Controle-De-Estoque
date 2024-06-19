import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import imgPadrao from '../../../../public/Imagens/img2_padrao.png'
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

    interface ModalImagemProps {
        src?: string;
    }

    export function ModalImagem({src}:ModalImagemProps) {

        const [isOpen, setIsOpen] = useState(false)
        const { register, handleSubmit } = useForm()
        const [imagensUrl, setImagensUrl] = useState<string>(src)

        const onSubmit = (dados: string) => {
            setImagensUrl(dados)
            setIsOpen(false)    
            console.log(dados)
        }

        return (
            <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                <Dialog.Trigger asChild>
                    <button>
                        <img className='w-[150px] h-[150px]' src={imagensUrl ? imagensUrl : imgPadrao} alt='Imagem Padrao' />
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md">
                    <Dialog.Close className="flex ml-auto">
                        <X className="text-red-600" />
                    </Dialog.Close>
                    <Dialog.Title className="flex justify-center text-lg font-bold mb-4">
                        Edição de imagens
                    </Dialog.Title>
                    <div className="w-[250px] h-[200px] border mb-2">
                        <img
                            src={imagensUrl ? imagensUrl : imgPadrao}
                            alt="Descrição da imagem"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <form className="flex flex-col gap-1"
                        onSubmit={handleSubmit(onSubmit)}>
                        <label className="font-bold" htmlFor="url">URL:</label>
                        <input
                            className="w-[250px] p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="src"
                            {...register('src', {required: 'Preencha com uma url da imagem'})}
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
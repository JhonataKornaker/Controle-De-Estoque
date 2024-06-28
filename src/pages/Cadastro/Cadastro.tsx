import { useForm } from 'react-hook-form';
import { useEstoqueContext } from '../../hooks/useEstoqueContext';
import imgPadrao from '../../../public/Imagens/img2_padrao.png';
import { Cabecalho } from '../../Components/Cabecalho/Cabecalho';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface Itens {
    id: number;
    nome: string;
    quantidade: number;
    local: string;
    categoria: string;
    imagem?: string;
}

export function Cadastro() {
    const { adicionarEstoque } = useEstoqueContext();
    const [imagemUrl, setImagensUrl] = useState<string>(imgPadrao)
    const { register, handleSubmit, watch } = useForm<Itens>(); // Passando Itens como tipo genérico
    const imagem = watch('imagem');
    const navigate = useNavigate();

    const carregarImagem = (url: string | undefined) => {
        if (!url) {
            url = imgPadrao
        }
        setImagensUrl(url)
    }

    const onSubmit = (data: Itens) => {
        adicionarEstoque(data)
        navigate('/')
        console.log(data); // Aqui você terá acesso aos dados do formulário com o tipo Itens
    };

    return (
        <section className='xl:w-[800px] min-h-screen'>
            <div className='flex items-center justify-center'>
                <Link className='absolute left-0 xl:hidden' to='/'>
                    <ArrowLeft />
                </Link>
                <div>
                    <Cabecalho>
                        Cadastro De Produtos
                    </Cabecalho>
                </div>
            </div>
            <div className="xl:flex xl:justify-center w-full h-full p-2 rounded-lg">
                <img className='xl:w-[500px] xl:h-[400px]  w-full h-full object-cover' src={imagemUrl} alt="imagem do item" />
            </div>
            <div className='flex justify-between xl:justify-center xl:gap-6'>
                <input
                    className="xl:w-[400px] w-[250px] p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="URL da Imagem"
                    id="imagem"
                    {...register('imagem')}
                />
                <button
                    onClick={() => carregarImagem(imagem)}
                    className='ml-2 border p-2 rounded-lg'>
                    Carregar
                </button>
            </div>
            <form
                className='flex flex-col mt-6 p-2'
                onSubmit={handleSubmit(onSubmit)}>

                <div className='flex flex-col items-start'>
                    <label className="mt-6 font-bold" htmlFor="nome">Nome</label>
                    <input
                        className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        id="nome"
                        {...register('nome', { required: true })}
                    />
                    <label className="font-bold" htmlFor="quantidade">Quantidade</label>
                    <input
                        className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="number"
                        id="quantidade"
                        {...register('quantidade', { required: true })}
                    />
                    <label className="font-bold" htmlFor="local">Local</label>
                    <input
                        className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        id="local"
                        {...register('local', { required: true })}
                    />
                    <label className="font-bold" htmlFor="categoria">Categoria</label>
                    <input
                        className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        id="categoria"
                        {...register('categoria', { required: true })}
                    />
                </div>
                <button
                    className='self-center w-[100px] mt-4 border p-2 rounded-lg'
                    type="submit">
                    Salvar
                </button>
            </form>
        </section>
    );
}

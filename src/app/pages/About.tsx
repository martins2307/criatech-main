import Image from "next/image";
import Link from "next/link";

const ListPrefix = () => (
    <div className="flex items-center justify-center rounded-full">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-9 w-9 text-emerald-500"
        >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
    </div>
)

const Sobre = () => {
    return (
        <div className=' bg-slate-950 h-full w-full scroll-mt-28 px-6 text-white py-16' id='about'>
            <div className='container prose mx-auto md:prose-lg lg:prose-xl xl:max-w-[70vw] flex gap-16 items-center'>
                <div>
                    <Image
                        src={"/images/b1.png"}
                        alt="sobre"
                        width={650}
                        height={750}
                    />
                </div>
                <div className='flex flex-col gap-8'>
                    <h1 className="text-5xl font-bold">Quem somos nós?</h1>
                    <p className="text-2xl font-light align-top">
                        A criatech foi fundada em 2015, baseada na <br />
                        experiência dos seus fundadores nas áreas de <br />
                        Engenharia, Gestão de Negócios e <br />
                        desenvolvimento de software.
                    </p>

                    <p className="text-2xl font-light align-top">
                        Nós acreditamos que o conhecimento é a chave <br />
                        para o desenvolvimento e, desta forma, decidimos <br />
                        alocar a sede da companhia no interior de <br />
                        Pernambuco, oferecendo à comunidade local <br />
                        oportunidades que normalmente só as grandes <br />
                        cidades têm a oferecer no Brasil.
                    </p>
                </div>
            </div>
            <div className="text-white text-center py-16">
                <h1 className="text-5xl font-bold">Por quê a Criatech? </h1>
                <ul className='flex flex-col gap-8 py-16'>
                    <li className='w-full flex gap-8 justify-center'>
                        <ListPrefix />
                        <p className="text-2xl font-light align-top">
                            Nós não cedemos no tempo de entrega
                        </p>
                    </li>
                    <li className='w-full flex gap-8 justify-center'>
                        <ListPrefix />
                        <p className="text-2xl font-light align-top">
                            Nós entregamos a solução na melhor qualidade
                        </p>
                    </li>
                    <li className='w-full flex gap-8 justify-center'>
                        <ListPrefix />
                        <p className="text-2xl font-light align-top">
                            Nós temos preços competitivos
                        </p>
                    </li>
                    <li className='w-full flex gap-8 justify-center'>
                        <ListPrefix />
                        <p className="text-2xl font-light align-top">
                            Nós valorizamos as parcerias de longo prazo
                        </p>
                    </li>
                    <li className='w-full flex gap-8 justify-center'>
                        <ListPrefix />
                        <p className="text-2xl font-light align-top">
                            Nós somos absolutamente focados em boa comunicação
                        </p>
                    </li>
                </ul>
                <h3 className='font-bold text-4xl w-full text-center'>Nós oferecemos as melhores tecnologias do mercado para alavancar a performance da sua empresa</h3>
            </div>
            <div className='w-full flex justify-center'>
                <div className="grid gap-16 grid-cols-2 grid-rows-2 justify-center max-w-5xl">
                    <div className="w-full h-full flex flex-col gap-8 p-16 items-center justify-center bg-slate-900 rounded-xl">
                        <img src='/images/mobile-app-icon.svg' className='w-16' />
                        <h2 className='text-3xl font-bold'>Multiplatform apps</h2>
                        <p className='w-full text-center'>We develop custom multiplatform mobile apps (iOS and Android) and web apps based on requirements, using modern technologies and software development tools.</p>
                    </div>
                    <div className="w-full h-full flex flex-col gap-8 p-16 items-center justify-center bg-slate-900 rounded-xl">
                        <img src='/images/security-icon.svg' className='w-16' />
                        <h2 className='text-3xl font-bold'>Security</h2>
                        <p className='w-full text-center'>We provide solutions with security of all customers data. Data integrity is a critical part of quality in our applications.</p>
                    </div>
                    <div className="w-full h-full flex flex-col gap-8 p-16 items-center justify-center bg-slate-900 rounded-xl">
                        <img src='/images/storage-icon.svg' className='w-16' />
                        <h2 className='text-3xl font-bold'>Multiplatform apps</h2>
                        <p className='w-full text-center'>We have the best solutions in cloud storage. Providing security, speed and reliability, your application will have a new level of quality!</p>
                    </div>
                    <div className="w-full h-full flex flex-col gap-8 p-16 items-center justify-center bg-slate-900 rounded-xl">
                        <img src='/images/deadline-icon.svg' className='w-16' />
                        <h2 className='text-3xl font-bold'>Multiplatform apps</h2>
                        <p className='w-full text-center'>We know that time to market is important and based on agile development, our team work focused to deliver great software solutions as soon as possible.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre
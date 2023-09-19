import Image from "next/image";
import Link from "next/link";

const Sobre = () => {
  return (
    <div className=' bg-black h-full w-full scroll-mt-28 px-6 text-white ' id='sobre'>
        <div className='container prose mx-auto md:prose-lg lg:prose-xl xl:max-w-[75vw] columns-2'>
            <div>
            <Image
                src={"/images/b1.png"}
                alt="sobre"
                width={650}
                height={750}
            />
            </div>
            <div>
            <h1 className="text-5xl font-bold">Quem somos nós?</h1>
                <p className="text-2xl font-light align-top">
                A criatech foi fundada em 2015, baseada na <br/> 
                experiência dos seus fundadores nas áreas de <br/>
                Engenharia, Gestão de Negócios e <br/>
                desenvolvimento de software.
                </p>

                <p className="text-2xl font-light align-top">
                Nós acreditamos que o conhecimento é a chave <br/>
                para o desenvolvimento e, desta forma, decidimos <br/>
                alocar a sede da companhia no interior de <br/>
                Pernambuco, oferecendo à comunidade local <br/>
                oportunidades que normalmente só as grandes <br/>
                cidades têm a oferecer no Brasil.
                </p>
        </div>
        </div>
        <div className="text-white text-center"> 
            <h1 className="text-5xl font-bold">Por quê a Criatech? </h1>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full">
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
            <p className="text-2xl font-light align-top">
                Nós não cedemos no tempo de entrega
            </p>
            <p className="text-2xl font-light align-top">
                Nós entregamos a solução na melhor qualidade
            </p>
            <p className="text-2xl font-light align-top">
                Nós temos preços competitivos
            </p>
            <p className="text-2xl font-light align-top">
                Nós valorizamos as parcerias de longo prazo
            </p>
            <p className="text-2xl font-light align-top">
                Nós somos absolutamente focados em boa comunicação
            </p>
            <h2 className="text-3xl font-bold">Nós oferecemos as melhores tecnologias do mercado para alavancar a performance da sua <br/>empresa</h2>
        </div>
        <div className="grid gap-4 grid-cols-2justify-items-center">
            <div className="bg-blue border">
            
            <p>App multiplataforma</p>
            </div>

        </div>
    </div>
  )
}

export default Sobre
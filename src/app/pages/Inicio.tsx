import Image from "next/image";
import Link from "next/link";

const Inicio = () => {
  return (
    <div className='bg-slate-900 flex w-full scroll-mt-28 px-10 ' id='inicio'>
      <div className='container mx-auto md:prose-lg lg:prose-xl xl:max-w-[75vw] columns-2 space-y-10 '>
        
        <div className="font-semibold ">
            <h1 className='text-7xl text-white relative'>Criatech</h1><br/>
            <h1 className='text-7xl text-emerald-500 relative'> Soluções</h1>
        </div>
        <div className="font-light align-top">
            <p className="text-2xl text-white relative">
            Nós desenvolvemos e entregamos<br/> 
            softwares customizados para clientes em <br/>
            todo o mundo desde 2015.
            </p>
            <p className="text-2xl text-white relative">
            Nós treinamos profissionais para entender <br/>
            todos os seus problemas e desenvolver <br/>
            soluções customizadas para solucioná-<br/>los.
            </p>
        </div>
        <div className="text-white ">
          <Link href={"/Sobre"}>
            <button className="border border-slate-300 hover:border-emerald-500 rounded-md p-3">
                Veja quem somos
            </button>
          </Link>
        </div>
        <div className="flex relative ">
          <Image
                src={"/images/banner.png"}
                alt="sobre"
                width={700}
                height={800}
          />
        </div>
      </div>
    </div>
  )
}

export default Inicio
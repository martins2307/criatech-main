import Image from "next/image";
import Link from "next/link";

const Contato = () => {
  return (
    <div className='w-full scroll-mt-28 px-6 bg-slate-900 text-white' id='Contato'>
      <div className='container prose mx-auto md:prose-lg lg:prose-xl xl:max-w-[75vw] grid grid-cols-3 items-center'>
          <div className="logo">
            <Image
              src={"/images/logo.png"}
              alt="Criatech Logo"
              width={250}
              height={70}
            />
          </div>
          <div className="text-center text-medium ">
            <h1 className='text-2xl '>Contatos</h1>
            <p className="duration-500 hover:text-emerald-700">
              <a href="mailto:contato@criatech.me">
                contato@criatech.me
              </a>
            </p>
            <p className="duration-500 hover:text-emerald-700">
              <a href="https://api.whatsapp.com/send?phone=5521992610410">
                21 99261-0410
              </a>
            </p>
            <p className="duration-500 hover:text-emerald-700">
              <a href="https://api.whatsapp.com/send?phone=5587988532558">
                87 98853-2558
              </a>    
            </p>
        </div>
      </div>
    </div>
  )
}

export default Contato
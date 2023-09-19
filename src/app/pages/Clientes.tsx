import { Flow_Rounded } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const Clientes = () => {
  return (
    <div className='w-full scroll-mt-28 px-6 bg-slate-950 text-white' id='clientes'>
      <div className='container prose mx-auto md:prose-lg lg:prose-xl xl:max-w-[75vw]'>
        
        <h1 className='text-5xl text-center font-bold'>São parceiros Criatech</h1>
        
        <div className="grid grid-cols-3 items-center text-2xl font-medium">
          <div className="text-center border rounded-md p-3">
            <Image
              src={"/images/rina.jpg"}
              alt="rina"
              width={340}
              height={250}
          />
            <p>
            Rina Brasil
            </p>
          </div>
          <div className="text-center border rounded-md p-3">
            <Image
              src={"/images/omni.png"}
              alt="omni"
              width={340}
              height={250}
            />
            <p>
            Omni Brasil
            </p>
          </div>
          <div className="text-center border rounded-md p-3">
            <Image
              src={"/images/edunat.png"}
              alt="edunat"
              width={340}
              height={250}
            />
            <p>
            Edunat
            </p>
          </div>
          <div className="text-center border rounded-md p-3">
            <Image
              src={"/images/aerorio.jpg"}
              alt="aerorio"
              width={340}
              height={250}
            />
            <p>
            Aerorio Táxe Aéreo
            </p>
          </div>
          <div className="text-center border rounded-md p-3">
            <Image
              src={"/images/minhaconsulta.png"}
              alt="cosulta"
              width={340}
              height={250}
            />
            <p>
            Minha consulta 
            </p>
          </div>
          <div className="text-center border rounded-md p-3">
            <Image
              src={"/images/flightech.jpg"}
              alt="flightech"
              width={340}
              height={250}
            />
            <p>
            Flightech Aviation Service
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clientes
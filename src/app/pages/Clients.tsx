import { Flow_Rounded } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const clientsMap = [
  {
    'name': 'Rina Brasil',
    'imageURL': 'images/rina.jpg'
  },
  {
    'name': 'Omni Brasil',
    'imageURL': 'images/omni.png'
  },
  {
    'name': 'Edunat',
    'imageURL': 'images/edunat.png'
  },
  {
    'name': 'Aerorio Táxi Aéreo',
    'imageURL': 'images/aerorio.jpg'
  },
  {
    'name': 'Minha consulta',
    'imageURL': 'images/minhaconsulta.png'
  },
  {
    'name': 'Flightech Aviation Service',
    'imageURL': 'images/flightech.jpg'
  }
]

const Clients = () => {
  return (
    <div className='w-full scroll-mt-28 px-6 py-16 bg-slate-900 text-white' id='clients'>
      <div className='container prose mx-auto md:prose-lg lg:prose-xl xl:max-w-[75vw] flex flex-col gap-10'>
        <h1 className='text-5xl text-center font-bold'>Criatech is trusted by</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-12 items-center text-2xl font-medium">
          {clientsMap.map((client) => (
            <div className='flex flex-col gap-4' key={client.name}>
              <img
                src={client.imageURL}
                alt={client.name}
                className='w-full object-cover rounded-md'
              />
              <p className='w-full text-center font-light'>
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients
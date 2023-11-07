/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";

const clientsMap = [
  {
    'name': 'rina',
    'imageURL': 'images/rina.jpg'
  },
  {
    'name': 'omni',
    'imageURL': 'images/omni.png'
  },
  {
    'name': 'edunat',
    'imageURL': 'images/edunat.png'
  },
  {
    'name': 'aerorio',
    'imageURL': 'images/aerorio.jpg'
  },
  {
    'name': 'minha_consulta',
    'imageURL': 'images/minhaconsulta.png'
  },
  {
    'name': 'flightech',
    'imageURL': 'images/flightech.jpg'
  }
]

const Clients = () => {
  const { t } = useTranslation()
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
                {t(client.name)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients
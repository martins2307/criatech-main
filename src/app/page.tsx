import Image from 'next/image'
import Link from "next/link"
import Header from './_components/Header'
import Inicio from "./pages/Inicio"
import Sobre from "./pages/Sobre"
import Clientes from "./pages/Clientes"
import Contato from "./pages/Contato"

const Page = () => {
  return (
    <>
    <Header />
      <main className=''>
        <Inicio />
        <Sobre />
        <Clientes />
        <Contato />
      </main>
      </>
  )
}

export default Page

import Image from 'next/image'
import Link from "next/link"
import Home from "../pages/Home"
import About from "../pages/About"
import Clients from "../pages/Clients"
import Contact from "../pages/Contact"
import Header from '../_components/Header'
import ReactCountryFlag from 'react-country-flag'

const headerLinks = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Client',
    href: '#clients'
  },
  {
    label: 'Contact',
    href: '#contact'
  },
  {
    label:   <ReactCountryFlag countryCode="BR" />,
    href: '/'
  },
];

const Page = () => {
  return (
    <>
    <Header links={headerLinks} />
      <main className=''>
        <Home />
        <About />
        <Clients />
        <Contact />
      </main>
      </>
  )
}

export default Page

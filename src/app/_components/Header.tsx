"use client"

import Image from "next/image";
import Link from "next/link"
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "../hooks/useTranslation";

type HeaderLink = {
  label: string | JSX.Element
  href: string
};

interface HeaderProps {
  links?: HeaderLink[];
}

const defaultLinks = [
  {
    label: 'Início',
    href: '#inicio'
  },
  {
    label: 'Sobre',
    href: '#sobre'
  },
  {
    label: 'Clientes',
    href: '#clientes'
  },
  {
    label: 'Contato',
    href: '#contato'
  },
];

export default function Header({ links = defaultLinks }: HeaderProps) {
  const { changeLanguage } = useTranslation()

  return (
    <main>
      <div className="w-100 h-[118px] flex items-center justify-between px-2 bg-slate-900 font-roboto text-white">
        <div className="logo">
          <Image
            src={"/images/logo.png"}
            alt="Criatech Logo"
            width={250}
            height={70}
          />
        </div>
        <nav className="font-roboto uppercase">
          {/* Normal navigation */}
          <ul className="hidden md:flex h-100 gap-3 text-base flex-row justify-between transition-all ease-in-out">
            {links.map((item, i) => (
              <li
                key={i}
                className="duration-500 hover:text-emerald-700 h-full flex items-center"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <button onClick={() => changeLanguage('en')}>
                <ReactCountryFlag countryCode="US" />
              </button>
            </li>
            <li>
              <button onClick={() => changeLanguage('pt')}>
                <ReactCountryFlag countryCode="BR" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

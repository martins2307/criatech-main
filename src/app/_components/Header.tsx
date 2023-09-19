import Image from "next/image";
import Link from "next/link"

export default function Header() {
  const links = [
    ["Início", "/"],
    ["Sobre", "/sobre"],
    ["Clientes", "/clientes"],
    ["Contato", "/contato"],
  ];
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
                  className="duration-500 hover:text-emerald-700"
                >
                  <Link href={item[1]}>{item[0]}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </main>
  );
}

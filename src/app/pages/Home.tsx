"use client"

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";
import ReactCountryFlag from "react-country-flag";
import { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className='bg-slate-900 flex w-full scroll-mt-28 px-10 pb-4' id='home'>
      <div className='container mx-auto md:prose-lg lg:prose-xl xl:max-w-[75vw] flex h-full items-center justify-between'>
        <div className='flex flex-col h-full max-w-md'>
        <div className="font-semibold">
            <h1 className='text-7xl text-white relative'>Criatech</h1><br/>
            <h1 className='text-7xl text-emerald-500 relative'>{t('solutions')}</h1>
        </div>
        <div className="font-light align-top">
            <p className="text-2xl text-white relative">
              {t('home1')}
            </p>
            <p className="text-2xl text-white relative">
              {t('home2')}
            </p>
        </div>
        <div className="text-white ">
          <Link href={"/Sobre"}>
            <button className="border border-slate-300 hover:border-emerald-500 rounded-md p-3">
              {t('home_cta')}
            </button>
          </Link>
        </div>
        </div>
        <div className="flex relative">
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

export default Home
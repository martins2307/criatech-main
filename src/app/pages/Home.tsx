"use client"

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className='bg-primary-home flex w-full h-[calc(100vh-118px)] overflow-hidden' id='home'>
      <div className='container mx-auto md:prose-lg lg:prose-xl xl:max-w-[75vw] flex h-full items-center justify-between px-8' data-aos="fade-up">
        <div className='flex flex-col h-full max-w-md justify-center'>
          <div className="flex flex-col w-full items-center gap-4 font-semibold">
            <h1 className='text-6xl text-white relative'>Criatech</h1>
            <h1 className='text-6xl text-emerald-500 relative'>{t('solutions')}</h1>
          </div>
          <div className="flex flex-col w-full items-center text-center gap-4 font-light align-top my-8">
            <p className="text-lg md:text-2xl text-white relative">
              {t('home1')}
            </p>
            <p className="text-lg md:text-2xl text-white relative">
              {t('home2')}
            </p>
          </div>
          <div className="text-white w-full flex justify-center">
            <Link href={"/Sobre"}>
              <button className="border border-slate-300 hover:border-emerald-500 rounded-md p-3">
                {t('home_cta')}
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex relative">
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
"use client"

import { useState } from 'react'
import Header from './_components/Header'
import { TranslationContext } from './contexts/TranslationContext'
import About from './pages/About'
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import Home from './pages/Home'

const Page = () => {
  const [lang, setLang] = useState('pt')
  return (
    <TranslationContext.Provider value={{
      lang, setLang
    }}>
      <Header />
      <main className='overflow-x-hidden w-full'>
        <Home />
        <About />
        <Clients />
        <Contact />
      </main>
    </TranslationContext.Provider>
  )
}

export default Page

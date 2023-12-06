import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AosInit } from './_components/AosInit'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Criatech Soluções',
  description: 'A Criatech é uma fábrica de software Brasileira focada em soluções customizadas para o setor de engenharia',
  authors: [{
    name: "Criatech Soluções",
    url: "https://criatech.me"
  }],
  keywords: "web, desenvolvimento, software, engenharia, sistemas, development, react, node, javascript, equipe, fábrica de software"
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <AosInit />
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import { useContext, useState } from "react"
import { TranslationContext } from "../contexts/TranslationContext"

const en: Record<string, string> = {
    "solutions": "Solutions",
    "home1": "We develop and deliver customized software for clients worldwide since 2015.",
    "home2": "We train professionals to understand all their problems and develop customized solutions to solve them.",
    "home_cta": "See who we are.",
    "who_we_are_title": "Who are we?",
    "who_we_are_text1": "Criatech was founded in 2015 based on the experience of its founders in engineering, business management and software development",
    "who_we_are_text2": "We believe that knowledge is a key development driver, so we decided to locate the company in Pernambuco - Brazil, offering to the local community an opportunity usually restricted to major cities in Brazil.",
    "why_criatech_title": "Why Criatech?",
    "why_criatech_item1": "We do not concede in delivery time",
    "why_criatech_item2": "We deliver your solution at the highest quality",
    "why_criatech_item3": "We have competitive prices",
    "why_criatech_item4": "We put great value in long term partnerships",
    "why_criatech_item5": "We are absolutely crazy about good communication",
}

const pt: Record<string, string> = {
    "solutions": "Soluções",
    "home1": "Nós desenvolvemos e entregamos softwares customizados para clientes em todo o mundo desde 2015.",
    "home2": "Nós treinamos profissionais para entender todos os seus problemas e desenvolver soluções customizadas para solucioná-los.",
    "home_cta": "Veja quem somos",
    "who_we_are_title": "Quem somos nós?",
    "who_we_are_text1": "A criatech foi fundada em 2015, baseada na experiência dos seus fundadores nas áreas de Engenharia, Gestão de Negócios e desenvolvimento de software.",
    "who_we_are_text2": "Nós acreditamos que o conhecimento é a chave para o desenvolvimento e, desta forma, decidimos alocar a sede da companhia no interior de Pernambuco, oferecendo à comunidade local oportunidades que normalmente só as grandes cidades têm a oferecer no Brasil",
    "why_criatech_title": "Por quê a Criatech?",
    "why_criatech_item1": "Nós não cedemos no tempo de entrega",
    "why_criatech_item2": "Nós entregamos a solução na melhor qualidade",
    "why_criatech_item3": "Nós temos preços competitivos",
    "why_criatech_item4": "Nós valorizamos as parcerias de longo prazo",
    "why_criatech_item5": "Nós somos absolutamente focados em boa comunicação",
}

export const useTranslation = () => {
    const { lang, setLang } = useContext(TranslationContext)
    
    const changeLanguage = (language: 'pt' | 'en') => {
        setLang(language)
    }

    const getTranslation = (key: string) => {
        if (lang === 'pt') {
            return pt[key]
        }
        return en[key]
    }

    return {
        lang,
        changeLanguage,
        t: getTranslation
    }

}
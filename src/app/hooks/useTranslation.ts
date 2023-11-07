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
    "what_do_we_offer_title": "We offer the best technology to raise your company level",
    "what_do_we_offer_item1_title": "Multiplatform apps",
    "what_do_we_offer_item1_subtitle": "We develop custom multiplatform mobile apps (iOS and Android) and web apps based on requirements, using modern technologies and software development tools.",
    "what_do_we_offer_item2_title": "Security",
    "what_do_we_offer_item2_subtitle": "We provide solutions with security of all customers data. Data integrity is a critical part of quality in our applications.",
    "what_do_we_offer_item3_title": "Storage",
    "what_do_we_offer_item3_subtitle": "We have the best solutions in cloud storage. Providing security, speed and reliability, your application will have a new level of quality!",
    "what_do_we_offer_item4_title": "Deadlines",
    "what_do_we_offer_item4_subtitle": "We know that time to market is important and based on agile development, our team work focused to deliver great software solutions as soon as possible.",
    "clients_title": "Criatech is trusted by",
    "rina": "Rina Brazil",
    "omni": "Omni Air Taxi",
    "edunat": "Edunat",
    "aerorio": "Aerorio Air Taxi",
    "minha_consulta": "Minha consulta",
    "flightech": "Flightech Aviation Service",
    "contacts_title": "Contacts",
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
    "what_do_we_offer_title": "Nós oferecemos as melhores tecnologias do mercado para alavancar a performance da sua empresa",
    "what_do_we_offer_item1_title": "Apps multiplataforma",
    "what_do_we_offer_item1_subtitle": "Nós desenvolvemos aplicações multiplataforma customizadas (iOS, Android e web) baseadas nos requisitos dos clientes, utilizando o que há de mais moderno em desenvolvimento de software.",
    "what_do_we_offer_item2_title": "Segurança",
    "what_do_we_offer_item2_subtitle": "Nós oferecemos segurança de ponta em todas os dados dos clientes nas aplicações. A integridade e segurança dos dados é parte da qualidade do nosso processo.",
    "what_do_we_offer_item3_title": "Armazenamento",
    "what_do_we_offer_item3_subtitle": "Oferecemos as melhores soluções de armazenamento na nuvem. Segurança, confiabilidade e velocidade - a aplicação da sua empresa estará em um nível superior de qualidade!",
    "what_do_we_offer_item4_title": "Prazos",
    "what_do_we_offer_item4_subtitle": "Nós sabemos que tempo é importante no mercado. Aliados ao desenvolvimento ágil, nosso time garante a entrega do software no menor prazo do mercado.",
    "clients_title": "São parceiros da Criatech",
    "rina": "Rina Brasil",
    "omni": "Omni Táxi Aéreo",
    "edunat": "Edunat",
    "aerorio": "Aerorio Táxi Aéreo",
    "minha_consulta": "Minha consulta",
    "flightech": "Flightech Aviation Service",
    "contacts_title": "Contatos",
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
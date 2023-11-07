import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";

const ListPrefix = () => (
    <div className="flex items-center justify-center rounded-full">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-9 w-9 text-emerald-500"
        >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
    </div>
)

const About = () => {
    const { t } = useTranslation()
    return (
        <div className=' bg-slate-950 h-full w-full scroll-mt-28 px-6 text-white py-16' id='about'>
            <div className='container prose mx-auto md:prose-lg lg:prose-xl xl:max-w-[70vw] flex gap-16 items-center'>
                <div>
                    <Image
                        src={"/images/b1.png"}
                        alt="sobre"
                        width={650}
                        height={750}
                    />
                </div>
                <div className='flex flex-col gap-8'>
                    <h1 className="text-5xl font-bold">{t("who_we_are_title")}</h1>
                    <p className="text-2xl max-w-xl w-full font-light align-top">
                        {t("who_we_are_text1")}
                    </p>

                    <p className="text-2xl max-w-xl w-full font-light align-top">
                        {t("who_we_are_text2")}
                    </p>
                </div>
            </div>
            <div className="text-white text-center py-16">

                <h1 className="text-5xl font-bold">
                    {t("why_criatech_title")}</h1>
                <ul className='flex flex-col gap-8 py-16'>
                    <li className='w-full flex gap-8 justify-center'>
                        <ListPrefix />
                        <p className="text-2xl font-light align-top">
                            {t("why_criatech_item1")}
                        </p>
                    </li>
                    <li className='w-full flex gap-8 justify-center'>
                        <ListPrefix />
                        <p className="text-2xl font-light align-top">
                            {t("why_criatech_item2")}
                        </p>
                    </li>
                    <li className='w-full flex gap-8 justify-center'>
                        <ListPrefix />
                        <p className="text-2xl font-light align-top">
                            {t("why_criatech_item3")}
                        </p>
                    </li>
                    <li className='w-full flex gap-8 justify-center'>
                        <ListPrefix />
                        <p className="text-2xl font-light align-top">
                            {t("why_criatech_item4")}
                        </p>
                    </li>
                    <li className='w-full flex gap-8 justify-center'>
                        <ListPrefix />
                        <p className="text-2xl font-light align-top">
                            {t("why_criatech_item5")}
                        </p>
                    </li>
                </ul>
                <h3 className='font-bold text-4xl w-full text-center'>{t("what_do_we_offer_title")}</h3>
            </div>
            <div className='w-full flex justify-center'>
                <div className="grid gap-16 grid-cols-2 grid-rows-2 justify-center max-w-5xl">
                    <div className="w-full h-full flex flex-col gap-8 p-16 items-center justify-center bg-slate-900 rounded-xl">
                        <img src='/images/mobile-app-icon.svg' className='w-16' />
                        <h2 className='text-3xl font-bold'>{t("what_do_we_offer_item1_title")}</h2>
                        <p className='w-full text-center'>{t("what_do_we_offer_item1_subtitle")}</p>
                    </div>
                    <div className="w-full h-full flex flex-col gap-8 p-16 items-center justify-center bg-slate-900 rounded-xl">
                        <img src='/images/security-icon.svg' className='w-16' />
                        <h2 className='text-3xl font-bold'>{t("what_do_we_offer_item2_title")}</h2>
                        <p className='w-full text-center'>{t("what_do_we_offer_item2_subtitle")}</p>
                    </div>
                    <div className="w-full h-full flex flex-col gap-8 p-16 items-center justify-center bg-slate-900 rounded-xl">
                        <img src='/images/storage-icon.svg' className='w-16' />
                        <h2 className='text-3xl font-bold'>{t("what_do_we_offer_item3_title")}</h2>
                        <p className='w-full text-center'>{t("what_do_we_offer_item3_subtitle")}</p>
                    </div>
                    <div className="w-full h-full flex flex-col gap-8 p-16 items-center justify-center bg-slate-900 rounded-xl">
                        <img src='/images/deadline-icon.svg' className='w-16' />
                        <h2 className='text-3xl font-bold'>{t("what_do_we_offer_item4_title")}</h2>
                        <p className='w-full text-center'>{t("what_do_we_offer_item4_subtitle")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
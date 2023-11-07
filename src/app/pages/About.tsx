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
            className="h-4 w-4 text-emerald-500"
        >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
    </div>
)

const About = () => {
    const { t } = useTranslation()
    return (
        <div className=' bg-primary-about h-full w-full scroll-mt-28 px-6 text-white py-16' id='about'>
            <div className='container prose mx-auto md:prose-lg lg:prose-xl xl:max-w-[70vw] flex gap-16 items-center'>
                <div data-aos="fade-right">
                    <Image
                        src={"/images/b1.png"}
                        alt="sobre"
                        width={650}
                        height={750}
                    />
                </div>
                <div className='flex flex-col gap-8' data-aos="fade-left">
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

                <h1 className="text-5xl font-bold" data-aos="fade-up">{t("why_criatech_title")}</h1>
                <div data-aos="fade-up" className="py-16 flex justify-center">
                    <ul className='flex flex-col gap-8' data-aos="fade-right">
                        <li className='w-full flex gap-8'>
                            <ListPrefix />
                            <p className="text-2xl font-light align-top">
                                {t("why_criatech_item1")}
                            </p>
                        </li>
                        <li className='w-full flex gap-8'>
                            <ListPrefix />
                            <p className="text-2xl font-light align-top">
                                {t("why_criatech_item2")}
                            </p>
                        </li>
                        <li className='w-full flex gap-8'>
                            <ListPrefix />
                            <p className="text-2xl font-light align-top">
                                {t("why_criatech_item3")}
                            </p>
                        </li>
                        <li className='w-full flex gap-8'>
                            <ListPrefix />
                            <p className="text-2xl font-light align-top">
                                {t("why_criatech_item4")}
                            </p>
                        </li>
                        <li className='w-full flex gap-8'>
                            <ListPrefix />
                            <p className="text-2xl font-light align-top">
                                {t("why_criatech_item5")}
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="w-full flex justify-center">
                    <h3 className='font-bold text-4xl w-full text-center max-w-5xl' data-aos="fade-up">{t("what_do_we_offer_title")}</h3>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className="grid gap-8 grid-cols-2 grid-rows-2 justify-center max-w-5xl" data-aos="fade-up">
                    <div className="w-full h-full flex flex-col gap-8 p-12 items-center justify-center bg-primary-home rounded-xl" data-aos="fade-right">
                        <img src='/images/mobile-app-icon.svg' className='h-24' />
                        <div className="flex flex-col gap-2">
                            <h2 className='text-4xl text-center font-bold leading-tight'>{t("what_do_we_offer_item1_title")}</h2>
                            <p className='w-full text-center text-base font-light'>{t("what_do_we_offer_item1_subtitle")}</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-8 p-12 items-center justify-center bg-primary-home rounded-xl" data-aos="fade-left">
                        <img src='/images/security-icon.svg' className='h-24' />
                        <div className="flex flex-col gap-2 w-full">
                            <h2 className='text-4xl text-center font-bold leading-tight'>{t("what_do_we_offer_item2_title")}</h2>
                            <p className='w-full text-center text-base font-light'>{t("what_do_we_offer_item2_subtitle")}</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-8 p-12 items-center justify-center bg-primary-home rounded-xl" data-aos="fade-right">
                        <img src='/images/storage-icon.svg' className='h-24' />
                        <div className="flex flex-col gap-2 w-full">
                            <h2 className='text-4xl text-center font-bold leading-tight'>{t("what_do_we_offer_item3_title")}</h2>
                            <p className='w-full text-center text-base font-light'>{t("what_do_we_offer_item3_subtitle")}</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-8 p-12 items-center justify-center bg-primary-home rounded-xl" data-aos="fade-left">
                        <img src='/images/deadline-icon.svg' className='h-24' />
                        <div className="flex flex-col gap-2 w-full">
                            <h2 className='text-4xl text-center font-bold leading-tight'>{t("what_do_we_offer_item4_title")}</h2>
                            <p className='w-full text-center text-base font-light'>{t("what_do_we_offer_item4_subtitle")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
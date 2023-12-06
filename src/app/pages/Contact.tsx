import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";

const WhatsappIcon = () => (<svg style={{
  color: 'rgb(37, 211, 102)',
}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" className="whatsapp" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.641 2.325c-1.497-1.5-3.488-2.325-5.609-2.325-4.369 0-7.925 3.556-7.925 7.928 0 1.397 0.366 2.763 1.059 3.963l-1.125 4.109 4.203-1.103c1.159 0.631 2.463 0.966 3.787 0.966h0.003c0 0 0 0 0 0 4.369 0 7.928-3.556 7.928-7.928 0-2.119-0.825-4.109-2.322-5.609zM8.034 14.525v0c-1.184 0-2.344-0.319-3.356-0.919l-0.241-0.144-2.494 0.653 0.666-2.431-0.156-0.25c-0.663-1.047-1.009-2.259-1.009-3.506 0-3.634 2.956-6.591 6.594-6.591 1.759 0 3.416 0.688 4.659 1.931 1.244 1.247 1.928 2.9 1.928 4.662-0.003 3.637-2.959 6.594-6.591 6.594zM11.647 9.588c-0.197-0.1-1.172-0.578-1.353-0.644s-0.313-0.1-0.447 0.1c-0.131 0.197-0.512 0.644-0.628 0.778-0.116 0.131-0.231 0.15-0.428 0.050s-0.838-0.309-1.594-0.984c-0.588-0.525-0.987-1.175-1.103-1.372s-0.013-0.306 0.088-0.403c0.091-0.088 0.197-0.231 0.297-0.347s0.131-0.197 0.197-0.331c0.066-0.131 0.034-0.247-0.016-0.347s-0.447-1.075-0.609-1.472c-0.159-0.388-0.325-0.334-0.447-0.341-0.116-0.006-0.247-0.006-0.378-0.006s-0.347 0.050-0.528 0.247c-0.181 0.197-0.694 0.678-0.694 1.653s0.709 1.916 0.809 2.050c0.1 0.131 1.397 2.134 3.384 2.991 0.472 0.203 0.841 0.325 1.128 0.419 0.475 0.15 0.906 0.128 1.247 0.078 0.381-0.056 1.172-0.478 1.338-0.941s0.166-0.859 0.116-0.941c-0.047-0.088-0.178-0.137-0.378-0.238z"></path></svg>)

const EmailIcon = () => (<svg style={{
  color: 'rgb(178, 49, 33)',
}} stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" className="email" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
)


const Contact = () => {
  const { t } = useTranslation()
  return (
    <div className='w-full scroll-mt-28 px-6 p-8 bg-primary-contact text-white' id='contact'>
      <div className='container prose mx-auto md:prose-lg lg:prose-xl xl:max-w-[75vw] grid md:grid-cols-3 grid-cols-1 items-center'>
        <div className="logo md:block hidden">
          <Image
            src={"/images/logo.png"}
            alt="Criatech Logo"
            width={250}
            height={70}
          />
        </div>
        <div className="w-full flex flex-col gap-4 items-center">
          <h1 className='w-full text-2xl text-center'>{t("contacts_title")}</h1>
          <ul>
            <li className="flex gap-4 duration-500 hover:text-primary-success">
              <EmailIcon />
              <a href="mailto:contato@criatech.me">
                contato@criatech.me
              </a>
            </li>
            <li className="flex gap-4 duration-500 hover:text-primary-success">
              <WhatsappIcon />
              <a href="mailto:contato@criatech.me">
                21 99261-0410
              </a>
            </li>
            <li className="flex gap-4 duration-500 hover:text-primary-success">
              <WhatsappIcon />
              <a href="mailto:contato@criatech.me" >
                87 98853-2558
              </a>
            </li>
          </ul>
        </div>
        <div className='w-full md:flex hidden items-center justify-center duration-500 hover:text-primary-success'>
          <a href="https://www.instagram.com/criatech/" target='_blank'>
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
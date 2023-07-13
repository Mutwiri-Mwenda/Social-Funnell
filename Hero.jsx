import styles from '../style'

import { discount, stock1 } from '../assets'
import Button from './Button'

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 w-[100%] h-[100%]`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'> 20% </span>
           Discount For {""}
          <span className='text-white'> 1 Month </span>
           Account
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]'>
            Hi, welcome to <br className='sm:block hidden'/> {""}
            <span className='text-black'>
            Social Funnel
            </span>
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We’re reinventing business spend with one global solution combining corporate cards, 
        expense management, Accounts Payable and seamless ERP connections. 
        Join finance teams in 32 countries today using the spend management solution built for finance professionals.
        </p>
        <div className='ss:flex hidden md:mr-5 mr-0 '>
           <Button/>
          </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={stock1} alt="billing" className='w-[500px] h-[500px] relative z-[5] left-771px right-112px rounded-md' />
        <div className='absolute z-[0] w-[50%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40'/>
        <div className='absolute z-[0] w-[50%] h-[35%] right-20 bottom-20 blue__gradient'/>
      </div>
    </section>
  )

export default Hero

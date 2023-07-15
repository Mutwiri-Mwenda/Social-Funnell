import { quotes } from '../assets'
import Button from './Button'
import { ourservices } from '../constants'

const OurServices = ({content, heading1}) =>  (
    <section>
        <div className='flex justify-between flex-col px-10 py-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5  text-black bg-cyan-200'>
            <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-black' >
                {heading1}
            </h1>
            <p className='font-poppins font-normal text-[18px] leading-[32px] text-black  my-5'>
             {content}
            </p>
            <div className='ss:flex hidden md:mr-5 mr-0 mt-0 '>
                <Button/>
            </div>
        </div>
        <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 text-black bg-cyan-200'>
            <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-black' >
                {heading1}
            </h1>
            <p className='font-poppins font-normal text-[18px] leading-[32px] text-black  my-10'>
             {content}
            </p>
            <div className='ss:flex hidden md:mr-5 mr-0  mt-0'>
                <Button/>
            </div>
        </div>
    </section>
    
  )


export default OurServices
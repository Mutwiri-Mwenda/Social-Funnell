import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-16 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[12px] mt-10`}>
      Schedule a call
    </button>
  )
}

export default Button
import React from 'react'

const Success = ({message}) => {
  console.log(message);
  return (
    <section className='bg-green-100 w-1/2 p-3 rounded-md m-auto mt-4'>
        <p className='text-green-600 font-bold font-sans text-sm'>{message}</p>
    </section>
  )
}

export default Success
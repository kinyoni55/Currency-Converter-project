import React from 'react'

const landingPage = () => {
  return (
    <main className="flex flex-col items-center  
    text-center min-h-screen  bg-zinc-100">
      <section className="max-w-2xl my-[100px]">
        <h1 className='justify-items-center text-[39px] font-[800] 
        mb-[50px]'>
          Kinyoni Konverter
        </h1>
        <p className='mb-[50px]'>
          Welcome to Platform Name, your reliable currency 
          converter. Instantly convert between major world 
          currencies with real-time exchange rates. Simple, 
          fast, and accurate so you can make smarter financial 
          decisions with ease.
        </p>
        <a className='bg-[rgb(232,232,234)] px-12 py-[6px] text-[24px]
        
           rounded-full ' href="/converterpage.jsx"> 
          Continue
        </a>
      </section>
    </main>
  )
}

export default landingPage

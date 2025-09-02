import React from 'react'

const Footer = () => {
  return (
    <div className='border-t bg-zinc-100 p-4 text-center'>
      <p>
         &copy; {new Date().getFullYear()} Kinyoni Konverter.All rights reserved.
      </p>
    </div>
  )
}

export default Footer
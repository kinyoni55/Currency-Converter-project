import React from 'react'

const Footer = () => {
  return (
    <div className=' flex-1  border-t bg-white p-4 text-center'>
      <p>
         &copy; {new Date().getFullYear()} Kinyoni Konverter.All rights reserved.
      </p>
    </div>
  )
}

export default Footer
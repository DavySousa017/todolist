import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col justify-start gap-10 p-[60px] text-2xl font-medium w-fit h-full border-r-2 border-black/20'>
        <button type='button' className='w-fit'>All</button>
        <button type='button' className='w-fit'>Favorites</button>
        <button type='button' className='w-fit'>Work</button>
        <button type='button' className='w-fit'>Study</button>
        <button type='button' className='w-fit'>Sport</button>
    </div>
  )
}

export default Navbar
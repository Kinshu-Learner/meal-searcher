import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between'>
        <div className="flex font-semibold text-3xl">
            GO <span className="font-bold">&nbsp;FOOD</span>
        </div>
      
        <div className="flex gap-6">
            <div className="">Home</div>
            <div className="">Groceries</div>
            <div className="">Pages</div>
        </div>
    </nav>
  )
}

export default Navbar

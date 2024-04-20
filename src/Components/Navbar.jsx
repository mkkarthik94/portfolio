import { Bars3Icon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const id = document.getElementById('ulId');
    if (id) id.style.display = 'block';
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const id = document.getElementById('ulId');
    if (id) id.style.display = 'none';
  },[])

  return (
    <div className='bg-white shadow-lg z-0  '>
      <nav className=' container mx-auto px-4 lg:px-8 py-5 flex justify-between items-center relative'>

        <div className='text-3xl font-bold'><a href="#">Logo</a></div>

        <ul className='hidden lg:flex px-8 text-xl font-bold relative'>
          <li><a className='p-4 underline-animation hover:text-yellow-500' href="">Home</a></li>
          <li><a className='p-4 underline-animation hover:text-yellow-500' href="">About</a></li>
          <li><a className='p-4 underline-animation hover:text-yellow-500' href="">Skills</a></li>
          <li><a className='p-4 underline-animation hover:text-yellow-500' href="">Projects</a></li>
          <li><a className='p-4 underline-animation hover:text-yellow-500' href="">Contact</a></li>
        </ul>

        <button className='bg-white lg:hidden' onClick={toggleMenu}>
          <Bars3Icon className='h-6 w-6' />
        </button>

        {(
          <div id="divId" className={`${isMenuOpen ? 'animate-navbar-down' : 'animate-navbar-up'} absolute bg-white top-20 -left-24 -right-24 bottom-0 `}>
            <ul id="ulId" className='menu-items lg:hidden px-8 text-xl font-bold text-center'>
              <li><a className=' p-4 block shadow-md' href="">Home</a></li>
              <li><a className=' p-4 block shadow-md' href="">About</a></li>
              <li><a className=' p-4 block shadow-md' href="">Skills</a></li>
              <li><a className=' p-4 block shadow-md' href="">Projects</a></li>
              <li><a className=' p-4 block shadow-md ' href="">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
}


// import React from 'react';
// import HeroImg from '../assets/dev-img.gif'
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";


// function Home(){
//   return (
//     <section className='flex flex-col md:flex-row justify-center h-full md:py-28'>
//       <div className='md:w-1/2 z-10'>
//         <p className=' text-5xl px-10 py-36 '> Hi,
//           <br/><p className='py-6'>I'm <span className='text-yellow-500 font-bold'>Sree Ram</span> </p>
//           <p className='py-3'>I am a Full-stack developer</p>
//         </p>
//         <div className=' flex flex-row px-12 -my-20 '>
//           <a className='pr-10 hover:text-yellow-500' href=""><FaGithub size={50} /></a>
//           <a className='pr-10 hover:text-yellow-500' href=""><FaLinkedin size={50}/></a>
//           <a className='hover:text-yellow-300' href=""><FaInstagramSquare size={50} /></a>
//         </div>
//       </div>
//         <img className='md:w-1/3' src={HeroImg}/>
//     </section>
//   );
// };

// export default Home;



import React, { useRef, useEffect } from 'react';
import HeroImg from '../assets/dev-img.gif';
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import Typed from 'typed.js';

function Home() {
  const runningtext = useRef(null);

  useEffect(() => {
    const typedInstance = new Typed(runningtext.current, {
      strings: ['Full-stack developer', 'Photographer', 'Front-end developer'],
      typeSpeed: 100,
      backSpeed: 100,
      cursorChar: '_',
      shuffle: true,
      smartBackspace: false,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typedInstance.destroy();
    };
  }, []);

  return (
    <section className='flex flex-col md:flex-row justify-center h-full md:py-24 md:mb-10'>
      <div className='md:w-1/2 z-10'>
        <div className='text-5xl px-10 py-36'>
          <p>Hi,</p>
          <br />
          <div style={{ paddingTop: '1rem' }}>
            <span className='py-6'>I'm <span className='text-yellow-500 font-bold'>Sree Ram</span></span>
          </div>
          <br />
          <div style={{ paddingTop: '1rem' }}>
            <span className='py-3'>I am a <span ref={runningtext} className='font-bold'></span></span>
          </div>
        </div>


        <div className=' flex flex-row px-12 -my-20 '>
          <a className='pr-10 hover:text-yellow-500' href="https://github.com/yourusername"><FaGithub size={50} /></a>
          <a className='pr-10 hover:text-yellow-500' href="https://linkedin.com/in/yourusername"><FaLinkedin size={50} /></a>
          <a className='hover:text-yellow-300' href="https://instagram.com/yourusername"><FaInstagramSquare size={50} /></a>
        </div>
      </div>
      <img className='md:w-1/3' src={HeroImg} />
    </section>
  );
}

export default Home;

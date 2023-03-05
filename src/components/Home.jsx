import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#091f3f] '>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-red-700 font-bold text-2xl'>Olá, meu nome é</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Matheus Teodoro</h1>
            <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>Desenvolvedor Front-End</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] '> Sou um desenvolvedor Front-End especializado em construir(e ocasionalmente
            design) em ReactJS. Atualmente, estou focado em  construção de aplicativos Web Front-End responsivos. </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-700 hover:border-red-700'> 
                <Link to='about' smooth={true} duration={250}>
                   Saiba Mais 
                </Link>
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home
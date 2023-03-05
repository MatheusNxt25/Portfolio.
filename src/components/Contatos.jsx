import React from 'react'

const Contatos = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#091f3f] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/14936c2f-ffa4-45bd-92fb-0f61f8f0b189" method='POST' encType='multipart/form-data' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contato</p>
                <p className='text-gray-300 py-4'>// Entre em contato</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nome' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Messagem'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover: border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>
        </form>

    </div>
  )
}

export default Contatos
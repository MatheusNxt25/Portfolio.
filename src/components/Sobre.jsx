import React from 'react'

const Sobre = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                  Sobre
                </p>
              </div>
              <div></div>
              </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                  <p>Olá, prazer em conhecê-lo. Por favor, dê uma olhada ao redor.</p>
                </div>
                <div>
                  
                  <p> * Sou apaixonado por construir um excelente software que melhora a vida das pessoas ao meu redor. <br></br>* Estou me formando em Análise e Desenvolvimento de Sistema, pela INSTED.<br></br>* Trabalho atualmente como auxiliar de redes na DIGITALNET.</p>  
                </div>
              </div>
          </div>
        </div>
    
  );
};

export default Sobre;





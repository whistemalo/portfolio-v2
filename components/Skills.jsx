import React from 'react';
import Image from 'next/image';

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px]  mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5] p-3'>Habilidades</p>
            <h2 className='max-w-[1240px] mx-auto px-2 '>Tecnologias con las que he trabajado</h2>
            <div className='p-5'> 
            <div className='p-1 shadow-xl rounded-xl' >
                <div className='py-10 p-3 grid grid-cols-5 gap-5 justify-center items-center'>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src='/../public/skills/css.png' width='48px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src='/../public/skills/firebase.png' width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src='/../public/skills/github1.png' width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src='/../public/skills/html.png' width='48px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src='/../public/skills/javascript.png' width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src='/../public/skills/colab.png' width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src='/../public/skills/java.png' width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src='/../public/skills/linux.png' width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src='/../public/skills/mongo.png' width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src='/../public/skills/node.png' width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src='/../public/skills/php.png' width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src='/../public/skills/python.png' width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src='/../public/skills/react.png' width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src='/../public/skills/sql-server.png' width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src='/../public/skills/tailwind.png' width='64px' height='64px'/>
                    </div>
                </div>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
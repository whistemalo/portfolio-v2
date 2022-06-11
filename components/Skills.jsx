import React from 'react';
import Image from 'next/image';
import css from '../public/assets/skills/css.png'
import firebase   from  '../public/assets/skills/firebase.png'
import github1    from  '../public/assets/skills/github1.png' 
import html       from  '../public/assets/skills/html.png' 
import javascript from  '../public/assets/skills/javascript.png'
import colab      from  '../public/assets/skills/colab.png' 
import java       from  '../public/assets/skills/java.png' 
import linux      from  '../public/assets/skills/linux.png' 
import mongo      from  '../public/assets/skills/mongo.png' 
import node       from  '../public/assets/skills/node.png' 
import php        from  '../public/assets/skills/php.png' 
import python     from  '../public/assets/skills/python.png' 
import react      from  '../public/assets/skills/react.png' 
import sql_server from  '../public/assets/skills/sql_server.png'
import tailwind   from  '../public/assets/skills/tailwind.png' 


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
                        <Image alt="css" src={css} width='48px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src={firebase} width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src={github1} width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src={html} width='48px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src={javascript} width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src={colab} width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src={java} width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src={linux} width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src={mongo} width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src={node} width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src={php} width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src={python} width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src={react} width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src={sql_server} width='64px' height='64px'/>
                    </div>
                    <div className='p-1 m-auto hover:scale-105 ease-in duration-300'> 
                        <Image alt='/' src={tailwind} width='64px' height='64px'/>
                    </div>
                </div>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
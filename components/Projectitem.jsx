import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Projectitem({title,backgroundImg,projectUrl,platform}) {
  return (
    <div>
        <div className='relative flex intems-center justify-center h-auto w-full shadow-xl shadow-gray-300 roundeed-xl p-1 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] '>
                <Image src={backgroundImg} className='rounded-xl group-hover:opacity-10'  alt='/' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-whit trackin-wider text-center'>{title}</h3>
                    <p className='pb-4 pt-2 text-white text-center'>{platform}</p>
                    <Link href={projectUrl}>
                        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Saber Más</p>
                    </Link>
                </div>
            </div>
    </div>
  )
}

export default Projectitem
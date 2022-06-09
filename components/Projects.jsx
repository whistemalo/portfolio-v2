import React from 'react'

import dssImg from '../public/assets/projects/dss.png'
import dsmImg from '../public/assets/projects/quiz.png'
import dssHttps from '../public/assets/projects/https.png'
import dsmForkify from '../public/assets/projects/recetario.png'
import Projectitem from './Projectitem'


function Projects() {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Proyectos</p>
            <h2 className='py-4'>Mis trabajos</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <Projectitem title="Creacion de una VPN" backgroundImg={dssImg} projectUrl={'/vpn'} platform={'Packet Tracer'}/>
            <Projectitem title="Aplicacion Nativa de Tests" backgroundImg={dsmImg} projectUrl={'/andorid'} platform={'Android Studio'}/>
            <Projectitem title="Emicion de Certificado Digital" backgroundImg={dssHttps} projectUrl={'/https'} platform={'Linux Ubuntu 20.04'}/>
            <Projectitem title="Recetario Forkify" backgroundImg={dsmForkify} projectUrl={'/forkyfy'} platform={'Android Studio'}/>
            </div>
        </div>
    </div>
  )
}

export default Projects
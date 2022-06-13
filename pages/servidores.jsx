import React from "react";
import Image from "next/image";
import activeDirectory from "../public/assets/projects/activeDirectory.png";
import ws from "../public/assets/projects/ws.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import diagrama from "../public/assets/projects/diagrama.png";
import nagios from "../public/assets/projects/nagios.jpg"
import exchange from "../public/assets/projects/exchange.png"

function servidores() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ws}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Levantamiento de Servidores</h2>
          <h3>Windows Server</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 items-center flex">
        <div className="col-span-4">
          <h2>Resumen</h2>
          <p className="py-2">
            Mientras cursaba la materia dedicada a servidores tuve la
            oportunidad de levantar un numero significativo de servicios entre
            los mas destacables esta: Active Directory, DNSSEC, DHCP, GPOs, IIS
            & CA entre otros. Desarrolle mis proyectos en las diversas
            herramientas de virtualización como lo es HYPER-V, VMWARE y
            VirtualBox.
          </p>
          <p>
            En el trancurso del desarrollo de cada levantamiento de servicios me
            tome la libertad de experimentar con las diferentes versiones
            recientes de Windows Server, por lo que levante servicios similares
            en las versiones de windows server entre el 2012-2022.
          </p>

          <h3 className="py-3">Servicios Desplegados </h3>

          {/* entregable 1 */}
          <h4>Entregable 1:</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <p>
              Elabore una solución de implementación de Servicios de Red,
              desplegado en Hyper-V involucrnado una red Cliente-Servidor con un
              Servidor funcionando con el sistema operativo Windows Server Core
              y clientes con un sistema operativo Windows 10, desde uno de los
              clientes de la red se realizo la conexión al servidor desde este
              cliente instalado virtual administra el servidor virtual core y
              instalan los servicios RDP, RSAT, Powershell Remoto, DNS, AD y
              DHCP.
            </p>
            <img src={activeDirectory.src} alt="/" />
          </div>
          <a href="hyper_v.pdf">
            <button className="px-8 py-2 mt-4">Manual</button>
          </a>

          {/* entregable2 */}
          <h4 className="py-6">Entregable 2:</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <img src={diagrama.src} alt="/" />
            <p>
              Implementación de WS2012 (Servidor DC) en el que se levantaron los
              servicios AD, GPOs, DNS, DHCP y IIS distribuidos en múltiples
              servidores, la administración de los servidores, se realiza de
              manera remota mediante los Servicios de Escritorio Remoto de
              Windows desde alguna máquina cliente del personal de TI. Se creo
              el plan de direccionamiento de ips bajo los requerimientos
              específicos de cada departamento, utilizando una dirección de
              clase B.
            </p>
          </div>
          <a href="manual.pdf">
            <button className="px-8 py-2 mt-4">Manual</button>
          </a>
          <a className="px-3" href="requeriminetos.pdf">
            <button className="px-8 py-2 mt-4">Requerimientos</button>
          </a>

          {/* entregable3 */}
          <h4 className="pb-4 pt-10">Entregable 3:</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p>
                Diseño de un sistema de red en Hyper-V implementando 3
                servidores. En dichos servidores esta configuro;
              </p>
              <div className="grid md:grid-cols-2 gap-8 pt-6">
                <ul>
                  {" "}
                  Servidor 1:
                  <li>Active Directory</li>
                  <li>DNS</li>
                  <li>DHCP</li>
                </ul>
                <ul>
                  Servidor 2:
                  <li>Active Directory</li>
                  <li>DNS</li>
                  <li>DHCP</li>
                </ul>
              </div>
              <p className="pt-3">
                Servidor 3: Este servidor Linux tiene instalada una herramienta
                de monitoreo de servicios en red Nagios CORE. El equipo de
                monitoreo pude observar ambos servidores esta herramienta
                presenta información en tiempo real del estado de los equipos y
                sus respectivos servicios. El descubrimiento de los servicios a
                monitorear se realiza a través de una búsqueda sobre todos los
                puertos habilitados en el servidor. Además, la herramienta de
                monitoreo brinda una interfaz web para la visualización del
                estado de los equipos y sus servicios.
              </p>
            </div>
            <img src={nagios.src} alt="/" />
          </div>

          <a className="px-3" href="req2.pdf">
            <button className="px-8 py-2 mt-4">Requerimientos</button>
          </a>

          {/* entregable4 */}
          <h4 className="pt-10 pb-6">Entregable 4:</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <img src={exchange.src} alt="/" />
            <p>
              Elaboración de una red local administrada por un controlador de
              dominio bajo Windows Server 2022, implementado DNS, servicio web
              autenticado con SSL y un servicio de correo local con Windows
              Exchange y realización de copias de respaldo de la configuración
              del servidor DC hacia la Nube. El direccionamiento ip para la red
              de Clientes es diferente a la utilizada por ambos Servidores.
              Configurando una subred de la Clase B, de tipo Privada y con
              capacidad para 50 host. El direccionamiento ip de los clientes
              puede realizarse de forma estática o dinámica.
            </p>
          </div>
          <a href="https://drive.google.com/file/d/14CH9gDi62BaP8svQsSu0pjcCURAOok7B/view?usp=sharing">
            <button className="px-8 py-2 mt-4">Manual</button>
          </a>
          <a className="px-3" href="req3.pdf">
            <button className="px-8 py-2 mt-4">Requerimientos</button>
          </a>
        </div>

        <div className=" col-span-4 md:col-span-1 shadow-xl  shadow-gray-400 rounded-xl p-4 h-full">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologias</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Windows Server
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Active Directory
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> DNSSEC
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Exchange
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> RSAT
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Retroceder</p>
        </Link>
      </div>
    </div>
  );
}

export default servidores;

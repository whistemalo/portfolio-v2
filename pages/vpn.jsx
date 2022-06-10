import React from "react";
import Image from "next/image";
import VPN from "../public/assets/projects/dss.png";
import TOPOLOGIA from "../public/assets/projects/topologia.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function vpn() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={VPN}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Creación de una VPN</h2>
          <h3>Cisco Packet Tracer</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 items-center flex">
        <div className="col-span-4">
          <h2>Resumen</h2>
          <p className="py-2">
            Haciendo uso de Packet Tracer se implementó un mecanismo de
            seguridad perimetral utilizando Firewalls, el diseño de seguridad
            consiste en la configuración de direccionamiento IP, NAT, VPN y
            ACLs. Para este proyecto se creó un plan de direccionamiento IP para
            la asignación de las direcciones a cada interfaz de los firewalls
            (CISCO), interfaz del router, servidores y PC2; Se Aplico
            enrutamiento en los dispositivos de red para pueda existir
            comunicación en toda la red, se configuro NAT en los Firewalls para
            asegurar las zonas de interés.
          </p>
          <p>
            El objetivo principal es el aseguramiento del tráfico de red
            mediante una VPN entre los firewalls FW1 y FW2 donde se encriptará
            toda comunicación entre PC2 y los servidores de la red interna
            además comunicación de PC2 hacia el servidor FTP 2 no se debe de
            encriptar así mismo el servidor FTP 2 deberá ser accesible desde la
            PC2 (subir y descargar archivos) y deberá responder a las pruebas de
            PING, únicamente el WWW Server de la red de servidores de red
            interna es capaz de comunicarse con el servidor FTP 2 (descarga de
            archivos) con las restricciones para servidor FTP 2 ya que este no
            deberá comunicarse (acceso a servicios) ni con el EMAIL Server ni
            con el FTP Server, excepto a través de tráfico ICMP para
            diagnosticar problemas de conectividad, la PC2 deberá poder
            conectarse hacia EMAIL Server para el envío de correo y descarga de
            correo haciendo uso de los protocolos SMTP y POP3 a su vez FTP
            server es capaz de conectarse a las consolas de administración de
            FW1,FW2; para realizar tareas de configuración haciendo uso del
            protocolo SSH y diagnóstico de la conectividad a través del
            protocolo ICMP.
          </p>
          <h3 className="py-4">Topología</h3>
          <img src={TOPOLOGIA.src} alt="/" />
          <button className="px-8 py-2 mt-4">Archivo</button>
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl  shadow-gray-400 rounded-xl p-4 h-full">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologias</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Cisco Packet Tracer
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Encriptación AES
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Hash md5
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

export default vpn;

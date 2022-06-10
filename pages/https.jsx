import React from "react";
import Image from "next/image";
import HTTPS from "../public/assets/projects/https.png";
import TOPOLOGIA from "../public/assets/projects/httpstop.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function https() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={HTTPS}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Emisión de un Certificado SSL </h2>
          <h3>Linux</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 items-center flex">
        <div className="col-span-4">
          <h2>Resumen</h2>
          <p className="py-2">
            Implementación de un sistema de seguridad en un sitio WEB,
            utilizando un certificado digital generado por el servidor CA a
            través de una Autoridad Certificadora (CA) Raíz, sobre un Sistema
            Operativo Linux. Además, se desplego Servidor Web seguro (HTTPS),
            donde el certificado digital utilizado por el servidor fue emitido
            por la Autoridad Certificadora Raíz, la comprobación del
            aseguramiento de la conexión se realizó desde varios dispositivos en
            los con anterioridad se instaló la autoridad certificadora.
          </p>
          <p>
            Actualmente el uso de un certificado digital para la encriptación de la
            comunicación sobre internet en una pagina web es fundamental para la
            protección de los datos sensibles que los usuarios generan en
            cualquier pagina web, paginas web que no poseen un certificado
            digital son omitidas en las búsquedas por motores como Google.com o
            Bing.com.
          </p>
          <h3 className="py-4">Topología</h3>
          <img src={TOPOLOGIA.src} alt="/" />
          

        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl  shadow-gray-400 rounded-xl p-4 h-full">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologias</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Linux Server
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Linux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Apache
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

export default https;

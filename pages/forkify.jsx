import React from "react";
import Image from "next/image";
import Forkify from "../public/assets/projects/recetario.png";
import app from "../public/assets/projects/quizapp.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function forkify() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Forkify}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Recetario </h2>
          <h3>Android Studio</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Proyecto</p>
          <h2>Resumen</h2>
          <p>
            Diseño y desarrollo de una aplicación móvil nativa bajo el lenguaje
            de java y con la implementación de firebase para la creacion de una .
          </p>
          <h3 className="py-4">Diseño</h3>
          <img src={app.src} alt="/" />
          <button className="px-8 py-2 mt-4">Archivo</button>
          
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologías</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Android Studio
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> GitHub
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Real Time Database
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase Authentication
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Regresar</p>
        </Link>
      </div>
    </div>
  );
}

export default forkify;

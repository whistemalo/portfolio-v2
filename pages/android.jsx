import React from "react";
import Image from "next/image";
import DSM from "../public/assets/projects/quiz.png";
import app from "../public/assets/projects/quizapp.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function android() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={DSM}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Cuestinoario Interactivo </h2>
          <h3>Android Studio</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Proyecto</p>
          <h2>Resumen</h2>
          <p>
            Diseño y desarrollo de una aplicación móvil nativa bajo el lenguaje
            de java y con la implementación de firebase utilizada para la
            creación de múltiples evaluaciones, dicha app le permite a los
            usuario con nivel de administrador crear cuestionarios de preguntas
            tipo selección múltiple y verdadero/falso además este podrá realizar
            un CRUD sobre todas las evaluaciones así como en su contenido, por
            otro lado los estudiantes pueden acceder a una evaluación
            determinado a través de un código este se le proporcionara al
            evaluado por medios ajenos a la aplicación al terminar la evaluación
            el usuario podrá obtener su calificación.
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

export default android;

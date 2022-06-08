import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Williams</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Computer Science Engineer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Soy técnico electrónico con un enfoque
            al desarrollo web actualmente curso el quinto año de una ingeniería
            en 
             <a className="text-[#5651e5] font-bold hover:bg-black/40 p-1"
              href="https://www.udb.edu.sv/udb/carreras/carrera/ingenieria_en_ciencias_de_la_computacion"
              target="_blank"
            >
              ciencias de la computación
            </a>
            en la 
            <a className="text-[#5651e5] font-bold p-1" href="https://www.udb.edu.sv/udb/" target="_blank">
               Universidad Don Bosco.
            </a>
            Entre mis ambiciones a corto plazo se encuentra una especialización
            en inteligencia artificial para el analisis de datos.
          </p>

          {/* contacto */}
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn/>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub/>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail/>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

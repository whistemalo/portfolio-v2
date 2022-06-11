import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&#39;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]">Williams</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Computer Science Engineer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
             Técnico electrónico & estudiante de 9 ciclo en ingeniería
            en
            <a className="text-[#5651e5] font-bold hover:underline p-1"
              href="https://www.udb.edu.sv/udb/carreras/carrera/ingenieria_en_ciencias_de_la_computacion"
              target="_blank"
              rel="noreferrer"
            >
              ciencias de la computación.
            </a>
           
            
          </p>

          {/* contacto */}
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/williams-amaya-580779231/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/whistemalo">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>

            <a href="mailto:whistemalo@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a href="Williams Amaya.pdf">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

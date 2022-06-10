import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">Acerca de</p>
          <h2>¿Quien soy?</h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Soy técnico electrónico con un enfoque al desarrollo web actualmente
            curso el quinto año de una ingeniería en
            <a
              className="text-[#5651e5] font-bold hover:bg-black/40 p-1"
              href="https://www.udb.edu.sv/udb/carreras/carrera/ingenieria_en_ciencias_de_la_computacion"
              target="_blank"
            >
              ciencias de la computación
            </a>
            en la
            <a
              className="text-[#5651e5] font-bold p-1"
              href="https://www.udb.edu.sv/udb/"
              target="_blank"
            >
              Universidad Don Bosco.
            </a>
            Entre mis ambiciones a corto plazo se encuentra una especialización
            en inteligencia artificial para el analisis de datos.
          </p>
        </div>

        <div className="p-1 w-full h-auto m-auto shadow-xl shador-gray-400 rounded-xl flex items-center justify-center hover:scale-105 duration-300">
            <img src="https://raw.githubusercontent.com/whistemalo/Portfolio-v1/master/img/perfil.jpg" alt="perfil" className="rounded"  />
        </div>
      </div>
    </div>
  );
};

export default About;

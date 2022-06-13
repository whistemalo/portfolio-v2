import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Acerca de
          </p>
          <h2>¿Quien soy?</h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Soy técnico electrónico con un gran interes por el codigo, mis
            estudios se han centrado en la programacion particularmente en el
            desarrollo web y el levatamiento de servidores windows/linux
            actualmente curso el 9 ciclo en ingeniería en
            <a
              className="text-[#5651e5] font-bold hover:underline p-1"
              href="https://www.udb.edu.sv/udb/carreras/carrera/ingenieria_en_ciencias_de_la_computacion"
              target="_blank"
              rel="noreferrer"
            >
              ciencias de la computación
            </a>
            en la
            <a
              className="text-[#5651e5] font-bold p-1 hover:underline"
              href="https://www.udb.edu.sv/udb/"
              target="_blank"
              rel="noreferrer"
            >
              Universidad Don Bosco.
            </a>
          </p>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Actualmente estoy trabajando en el diseño e implementación de un
            sistema de registro y reportes para la organización sin fines de
            lucro &#34;{" "}
            <a
              className="text-[#5651e5] font-bold hover:underline p-1"
              target="_blank"
              rel="noreferrer"
              href="https://comandosdesalvamento.org/"
            >
              Comandos de Salvamento
            </a>{" "}
            &#34;, dicho sistemas se desplegará a nivel nacional, y estará
            desplegada en forma de contenerización a través de dockers que se
            hospedará en google cloud.
          </p>
        </div>

        <div className="p-1 w-full h-auto m-auto shadow-xl shador-gray-400 rounded-xl flex items-center justify-center hover:scale-105 duration-300">
          <img
            src="https://raw.githubusercontent.com/whistemalo/Portfolio-v1/master/img/perfil.jpg"
            alt="perfil"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logoAltWhite from "../public/assets/logoAltWhite.png";
import logoAlt from "../public/assets/logoAlt.png";

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [shadow, setshadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [logo,setLogo]= useState(logoAlt);
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/vpn" ||
      router.asPath === "/forkify" ||
      router.asPath === "/https" ||
      router.asPath === "/servidores" ||
      router.asPath === "/android"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }

  }, [router]);

  const handleNav = () => {
    setnav(!nav);
  };

  const hadleHome = () => {
    setNavBg("#ecf0f3");
    setLinkColor("#1f2937");
    setLogo(logoAlt);
  };


  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setshadow(true);
      } else {
        setshadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    const handleBackground = () => {
      if (router.asPath === "/vpn" ||
      router.asPath === "/forkify" ||
      router.asPath === "/https" ||
      router.asPath === "/servidores" ||
      router.asPath === "/android") {
        if (window.scrollY >= 240) {
          setNavBg("#ecf0f3");
          setLinkColor("#1f2937");
          setLogo(logoAlt);
          setshadow(true);
        } else {
          setLogo(logoAltWhite);
          setNavBg("transparent");
          setLinkColor("#ecf0f3");
          setshadow(false);
        }
      }else{
        setLogo(logoAlt);
        setNavBg("#ecf0f3");
        setLinkColor("#1f2937");
      }
    };
    window.addEventListener("scroll", handleBackground);
  }, [router]);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-10 2xl:px-16">
        <div className="grid md:grid-cols-2 p-3" href="/">
        
        <Link href="/" className="absolute ">
          <Image src={logo.src}
            alt="logo"
            width="67"
            height="50"
            className="hover:"
            onClick={hadleHome}
            />
        </Link>
     
        </div>
        
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b">Incio</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Acerca de
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Habilidades
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Proyectos
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Cotacto
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu style={{ color: `${linkColor}` }} size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          !nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            !nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src={logo.src}
                alt="/"
                width={67}
                height={50}
                onClick={hadleHome}
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something together
              </p>
            </div>
          </div>

          {/* mobile menu */}
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#home">
                <li onClick={handleNav} className="py-4 text-sm">
                  Inicio
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={handleNav} className="py-4 text-sm">
                  Acerca de
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={handleNav} className="py-4 text-sm">
                  Habilidades
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={handleNav} className="py-4 text-sm">
                  Proyectos
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={handleNav} className="py-4 text-sm">
                  Cotacto
                </li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5661e5]">
                Comuniquémonos
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link href="https://www.linkedin.com/in/williams-amaya-580779231/">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href="https://github.com/whistemalo">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <a href="mailto:whistemalo@gmail.com">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>

                <a href="WilliamsAmaya.pdf">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

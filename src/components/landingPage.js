import React from "react";
import img from "../utilities/img/hero-illustration.png";
import Header from "./header";
export default function LandingPage() {
  return (
    <>
        <Header/>
      <div className="bg-gradient-to-l from-slate-400 to-cyan-700 min-h-screen py-20 md:pt-40">
        <div className="mx-5 md:mr-0">
          <div className="flex flex-col md:flex-row-reverse gap-5">
            <div >
              <img className="" src={img} />
            </div>
            <div className="text-3xl md:text-5xl text-slate-900 grid">
              <p className=" mx-5 self-center">Avanzad rápido, mantened la coordinación y optimizad el desarrollo
              todos juntos.<span className="text-xl text-opacity-90 block my-5 text-gray-900 md:text-2xl">La herramienta de desarrollo de software líder de los equipos ágiles</span></p>
            </div>
          </div>
          <div>
                <button className="bg-sky-800 px-4 py-2 rounded-md text-white active:translate-y-1 transition-transform ml-5"> Saber Más</button>
            </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

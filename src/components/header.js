import React from "react";

export default function Header() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 hover:text-white">Home</a>
          <a className="mr-5 hover:text-white">To Do</a>
          <a className="mr-5 hover:text-white">About Us</a>
          <a className="hover:text-white">Fourth Link</a>
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl xl:block lg:hidden">Agenda</span>
        </a>
        <div className="lg:w-2/5 inline-flex gap-1 lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:ring hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Registro
          </button>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:ring hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </header>
  );
}

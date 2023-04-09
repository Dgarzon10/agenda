import React, { useState, useEffect } from "react";
import SideBar from "./sideBar";

export default function LibroDiario() {
  const [Dinero, setDinero] = useState({
    cantidad: 0,
    titulo: "",
    tipo: "",
    periodicidad: false,
  });

  const [Cartera, setCartera] = useState([]);

  const [Balance, setBalance] = useState(0)

  useEffect(() => {
    const balanceSaldo=()=>{
      let balance=0;
      Cartera.map((e)=>{
        balance+=e;
      })
      setBalance((balance))
    }
    balanceSaldo()
  }, [Cartera])
  

  const ChangeCantidad = (e) => {
    let updatedValue = {};
    updatedValue = { cantidad: parseInt(e.target.value) };
    setDinero((cantidad) => ({
      ...cantidad,
      ...updatedValue,
    }));
  };
  // const ChangeTitulo = (e) => {
  //   let updatedValue = {};
  //   updatedValue = { titulo: e.target.value };
  //   setDinero((titulo) => ({
  //     ...titulo,
  //     ...updatedValue,
  //   }));
  // };
  const ChangePeriodico = (e) => {
    let updatedValue = {};
    updatedValue = { periodicidad: e.target.value };
    setDinero((periodicidad) => ({
      ...periodicidad,
      ...updatedValue,
    }));
  };
  const guardar = () => {
    let updatedValue = {};
    updatedValue = { tipo: document.getElementById("tipo").value };
    setDinero((tipo) => ({
      ...tipo,
      ...updatedValue,
    }));
    setCartera(oldArray => [...oldArray, Dinero.cantidad]);
    console.log(document.querySelector('#dinero').value=' ')
  };

  return (
    <>
      <SideBar />
      <div className="sm:ml-64 h-full">
        <div className="p-4 ">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <h2 className="text-2xl text-gray-400 dark:text-gray-500 pb-4 text-center">
              Libro Diario
            </h2>
          </div>
        </div>
        <div className="sm:m-16  h-96 max-w-5xl">
          <div className="flex  h-full rounded dark:bg-gray-800 relative">
            <div className=" bg-gray-600 h-full w-1/3 items-start">
              <div>
                <ul className="flex justify-around gap-2 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                  <li className="ml-2 w-full">
                    <a
                      href="#"
                      aria-current="page"
                      className="inline-block p-4 w-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    >
                      Ingresos
                    </a>
                  </li>
                  <li className="mr-2 w-full">
                    <a
                      href="#"
                      className="inline-block p-4 w-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    >
                      Egresos
                    </a>
                  </li>
                </ul>
              </div>
              <form className="pt-10  mx-2 flex flex-col gap-4">
                <div className="grid  md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      onChange={(e) => ChangeCantidad(e)}
                      type="number"
                      name="input"
                      id="dinero"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      
                    />
                    <label
                      htmlFor="floating_first_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Ingrese Dinero
                    </label>
                  </div>
                  {/* md:grid-cols-2 <div className="relative z-0 w-full mb-6 group">
                    <input
                      onChange={(e) => ChangeTitulo(e)}
                      type="text"
                      name="input"
                      id="titulo"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Titulo Transaccion
                    </label>
                  </div> */}
                </div>
                <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tipo de Transaccion
                  </label>
                  <select
                    id="tipo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option disabled auto defaultValue="Tipo de Ingreso">
                      Tipo de Ingreso
                    </option>
                    <option>Trabajo</option>
                    <option>Tirado en el piso</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="relative inline-flex items-center mb-4 cursor-pointer">
                    <input
                      onChange={(e) => ChangePeriodico(e)}
                      name="input"
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Periodico
                    </span>
                  </label>
                </div>
                <button
                  onClick={guardar}
                  type="button"
                  className="text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="flex flex-col w-full h-full gap-2">
              <div className=" h-5/6 w-full dark:bg-gray-800 grid grid-cols-3 gap-2 mt-2">
                <div className="flex items-center justify-center h-full rounded dark:bg-gray-500 ml-2 relative">
                  <h2 className="text-2x dark:text-gray-300 absolute top-2">
                    Contabilidad Hoy
                  </h2>
                  <div className="">
                    <ul>
                      {Cartera.map((e,index) => {
                        return <li key={e + index+1}>{e}</li>;
                      })}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-center h-full rounded dark:bg-gray-500 relative">
                  <h2 className="text-2x dark:text-gray-300 absolute top-2">
                    Contabilidad Semanal
                  </h2>
                  <div className=""></div>
                </div>
                <div className="flex items-center justify-center h-full rounded dark:bg-gray-500 mr-2 relative">
                  <h2 className="text-2x dark:text-gray-300 absolute top-2">
                    Contabilidad Mensual
                  </h2>
                  <div className=""></div>
                </div>
              </div>

              <div className=" h-1/6 w-full dark:bg-gray-800 grid grid-cols-3 gap-2 mb-1">
                <div className="flex items-center justify-center h-full rounded dark:bg-gray-500 ml-2 ">
                  <div>
                    {Balance<0?
                    <h2 className=" text-red-600">{Balance}</h2>:
                    <h2 className=" text-gray-300">{Balance}</h2>}
                  </div>
                </div>
                <div className="flex items-center justify-center h-full rounded dark:bg-gray-500 "></div>
                <div className="flex items-center justify-center h-full rounded dark:bg-gray-500 mr-2 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

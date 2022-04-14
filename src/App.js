import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //Hooks
  //const [variable,método]=useState(valorInicial);
  const [opcion, setOpcion] = useState("hoteles");
  const [data, setData] = useState([]);

  //los efectos secundarios, contenidos en dos parámetros
  //useEffect(callback,[]) el callback maneja el ciclodidmount, y entre[] se maneja el ciclo update
  //Por ej. useEffect(callback,[variable]) el efecto secundario se va a ejecutar cada que actualicemos esa variable
  let url = "https://pruebagcd.herokuapp.com/";
  useEffect(() => {
    const api = async () => {
      const response = await fetch(url + opcion); //Esta linea dice "espera que me traiga los valores de la url". Y con fetch capturamos los datos de la url
      const json = await response.json();
      setData(json);
    };
    api();
  }, [opcion]);

  const cambiarOpcion = () => {
    if (opcion === "hoteles") {
      setOpcion("paquetes");
    } else if (opcion === "paquetes") {
      setOpcion("ofertas");
    } else setOpcion("hoteles");
  };

  return (
    /*<div className="">
      <ul type="none">
      {data.map((o,i)=>{return <li key={i+o.nombre}><{o.nombre}</li>})}
      </ul>
    </div>*/
    <div className="container">
      <div className="row">
        <div className="col-6 my-5">
          <button className="btn btn-danger" onClick={cambiarOpcion}>
            Cambiar Opcion
          </button>
        </div>
        <div className="col-6 my-5">
          <ul className="my-5" type="none">
            {data.map((opcion, index) => {
              return (
                <li className="m-3" key={index + opcion.nombre}>
                  {opcion.nombre}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

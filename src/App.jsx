import React from "react";
import Navbar from "./componentes/Navbar";
import ParteUno from "./componentes/ParteUno";
import Footer from "./componentes/Footer";
import Body from "./componentes/Body";
import { useState, useEffect } from "react";
import "./App.css";

// leer informacion en localstorage
const recuperarCarrito = () => {
  const carritoGuardado = localStorage.getItem("carrito");
  return carritoGuardado ? JSON.parse(carritoGuardado) : [];
};

function App() {
  const [input, setInput] = useState("iron man");
  const [pelicula, setPelicula] = useState([]);
  const [carrito, setCarrito] = useState(recuperarCarrito);

  // crear actualizar carrito
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);
  

  return (
    <>
      <div>
        <Navbar
          setInput={setInput}
          input={input}
          setPelicula={setPelicula}
          carrito={carrito}
          setCarrito={setCarrito}
        />
        <ParteUno />
        <Footer />
        <Body pelicula={pelicula} setCarrito={setCarrito} carrito={carrito}  />
      </div>
    </>
  );
}

export default App;
import React from "react";
import "../styles/Body.css";
import Peliculas from "./Peliculas";

const Body = ({ pelicula=[], setCarrito, carrito }) => {
  // Función para manejar el clic en el botón
  const agregarAlCarrito = (nombrePelicula) => {
    setCarrito((prevCarrito) => {
      // Buscar si la película ya está en el carrito
      const peliculaExistente = prevCarrito.find(
        (item) => item.nombre === nombrePelicula
      );

      // Si la película ya está en el carrito, aumentar la cantidad
      if (peliculaExistente) {
        return prevCarrito.map((item) =>
          item.nombre === nombrePelicula
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      // Si la película no está en el carrito, agregarla con cantidad 1
      return [...prevCarrito, { nombre: nombrePelicula, cantidad: 1 }];
    });
  };

  return (
    <>
      <Peliculas pelicula={pelicula} agregarAlCarrito={agregarAlCarrito}/>
    </>
  );
};

export default Body;

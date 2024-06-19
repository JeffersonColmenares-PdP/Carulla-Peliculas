import React from "react";
import "../styles/Body.css";

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
      {console.log(carrito)}
      <div className="body-card">
        {pelicula.length <= 0 ? (
          <>
            <h1>No hay peliculas disponibles</h1>
          </>
        ) : (
          <>
            {pelicula.map((item, id) => (
              <div className="card" key={id}>
                <img
                  src={item.Poster}
                  className="imagenes-card"
                  alt="imagenPelicula"
                />
                <p className="titulo-car">Titulo: {item.Title}</p>
                <h5 className="h5-card">
                  Año: {item.Year} - Tipo: {item.Type}
                </h5>
                <button
                  className="agg-carrito"
                  onClick={() => agregarAlCarrito(item.Title)}
                >
                  Agregar
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios/50/FFFFFF/shopping-cart--v1.png"
                    alt="shopping-cart--v1"
                  />
                </button>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="carrito">
        <h2>Carrito de Compras</h2>
        <ul>
          {carrito.map((item, index) => (
            <li key={index}>
              {item.nombre} - Cantidad: {item.cantidad}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Body;

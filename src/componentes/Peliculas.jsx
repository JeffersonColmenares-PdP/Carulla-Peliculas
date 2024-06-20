import React from "react";
import "../styles/Body.css";

const Peliculas = ({ pelicula, agregarAlCarrito }) => {
  return (
    <>
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
    </>
  );
};

export default Peliculas;

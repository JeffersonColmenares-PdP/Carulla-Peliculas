import React from "react";
import "../styles/Navbar.css";
import { useEffect, useCallback, useState } from "react";

const Navbar = ({ setInput, input, setPelicula, carrito, setCarrito }) => {
  const [modal, setModal] = useState(false);

  const leerInput = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const eliminarPelicula = (id) => {
    // Filtra carrito  elimina  pelicula por id 
    const nuevoCarrito = carrito.filter((item, index) => index !== id);
    // Actualiza estado guarda en localStorage
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const fetchData = async () => {
    try {
      const datos = await fetch(
        `https://www.omdbapi.com/?apikey=2b9c4287&s=${
          input === "" ? "iron man" : input
        }&type=movie`
      );
      if (datos.ok) {
        const data = await datos.json();
        setPelicula(data.Search);
      }
    } catch (error) {
      console.log("El error es", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <button className="menu-button">
            <span className="menu-icon">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/FFFFFF/menu--v7.png"
                alt="menu--v7"
              />
            </span>
          </button>
          <div className="logo-carulla">
            <img
              width="25"
              src="https://carulla.vtexassets.com/assets/vtex.file-manager-graphql/images/561fe96d-932f-40cd-8e34-e442cdf1e0d6___f3556a6d4cab8e69740ad543ecb40c0d.png"
              alt="Volver al inicio"
            />
          </div>
          <div className="logo-carulla">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/FFFFFF/vertical-line.png"
              alt="vertical-line"
            />
          </div>
          <div className="location">
            <img
              width="30"
              height="25"
              src="https://img.icons8.com/ios/50/FFFFFF/marker--v1.png"
              alt="marker--v1"
            />
          </div>
          <div className="como-quieres">¿Cómo quieres recibir tu pedido?</div>
        </div>
        <div className="navbar-center">
          <input
            type="text"
            placeholder="¿Qué producto buscas?"
            className="search-input"
            onChange={leerInput}
          />
          <div className="busqueda-multiple" onClick={fetchData}>
            <div className="search-button">
              Búsqueda múltiple
              <img
                width="15"
                height="15"
                src="https://img.icons8.com/ios/50/7950F2/search-in-list.png"
                alt="search-in-list"
              />
            </div>
          </div>
        </div>
        <div className="navbar-right">
          <div className="icon-navbar-right">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/wired/64/FFFFFF/shopping-basket.png"
              alt="shopping-basket"
            />
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/FFFFFF/add-list.png"
              alt="add-list"
            />
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/puffy/32/FFFFFF/user.png"
              alt="user"
            />
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/material-sharp/24/FFFFFF/bell.png"
              alt="bell"
            />
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/android/24/FFFFFF/shopping-cart.png"
              alt="shopping-cart"
              onClick={() => {
                setModal(true);
              }}
            />
          </div>
        </div>
      </div>
      {modal && (
        <>
          <div className="modal-carrito">
            <h1 className="titulo-carrito">Películas Seleccionadas</h1>
            {carrito.length <= 0 ? (
              <p>No hay películas disponibles</p>
            ) : (
              <>
                {carrito.map((item, id) => (
                  //key indispensable en .map actualiza posicion modal
                  <div className="carrito-modal" key={id}>
                    <p className="nombre">Película: {item.nombre}</p>
                    <p className="cantidad">Cantidad: {item.cantidad}</p>
                    <button
                      className="eliminar-pelicula"
                      onClick={() => eliminarPelicula(id)}
                    >
                      Eliminar Película
                    </button>
                  </div>
                ))}
              </>
            )}
            <button
              className="cerrar-modal"
              onClick={() => {
                setModal(false);
              }}
            >
              Cerrar
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
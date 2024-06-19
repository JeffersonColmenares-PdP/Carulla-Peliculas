import React from "react";
import "../styles/ParteUno.css";

const ParteUno = () => {
  return (
    <>
      <div className="titulo-div">
        <h1 className="titulo">Pollo, Carnes y pescado</h1>
      </div>
      <img
        width={"100%"}
        src="https://carulla.vtexassets.com/assets/vtex.file-manager-graphql/images/784404d4-81b0-44cf-a425-c11c7849f852___209e545fb12863e13e4864dd15850f69.jpg"
        alt=""
      />
      <div className="inicio-pcp">
        <div className="inicio-pcp1"> Inicio</div>
        <div> / Pollo, Carnes y pescado /</div>
      </div>
      <div className="botones-inicio">
        <button className="boton-estilos2">
          <img
            width="15"
            height="15"
            style={{ marginRight: "6px" }}
            src="https://img.icons8.com/ios/50/FFFFFF/back--v1.png"
            alt="back--v1"
          />
          Pasillos
        </button>
        <button className="boton-estilos">Búfalo, ternera y otros</button>
        <button className="boton-estilos">Carne de cerdo</button>
        <button className="boton-estilos">Carne de res</button>
        <button className="boton-estilos">Otras especies de aves</button>
        <button className="boton-estilos">Pescados y mariscos</button>
        <button className="boton-estilos">Pollo</button>
      </div>
      <div className="filtros">
        <ul className="texto-filtros">
          <li className="titulo-filtros">Filtros</li>
          <li className="titulo-filtros">Filtrado por:</li>
          <li className="titulo-filtros2">Categoría</li>
          <li>
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Búfalo, Ternera Y Otras
          </li>
          <li>
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Carne de Cerdo
          </li>
          <li>
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Carne de Res
          </li>
          <li>
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Otras Especies De Aves
          </li>
          <li>
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Pescados Y Mariscos
          </li>
          <li className="titulo-filtros3">
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Pollo
          </li>
          <li className="titulo-filtros2">Ideal Para</li>
          <li>
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Caldos
          </li>
          <li>
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Estofar
          </li>
          <li>
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Hornear
          </li>
          <li>
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Parilla
          </li>
          <li>
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Saltear
          </li>
          <li>
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Sofreir
          </li>
          <li className="titulo-filtros3">
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Sudar
          </li>
          <li className="titulo-filtros2">Marca</li>
          <div className="buscar-filtros">
            <img
              className="lupa-filtros"
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/737373/search--v1.png"
              alt="search--v1"
            />
            <input className="input-filtros" type="text" placeholder="Buscar" />
          </div>
          <div className="buscador-marca">
            <li>
              <img
                width="15"
                height="15"
                style={{ marginRight: "5px" }}
                src="https://img.icons8.com/ios/50/737373/rounded-square.png"
                alt="rounded-square"
              />
              ABERDEEN
            </li>
            <li>
              <img
                width="15"
                height="15"
                style={{ marginRight: "5px" }}
                src="https://img.icons8.com/ios/50/737373/rounded-square.png"
                alt="rounded-square"
              />
              ANCLA Y VIENTO
            </li>
            <li>
              <img
                width="15"
                height="15"
                style={{ marginRight: "5px" }}
                src="https://img.icons8.com/ios/50/737373/rounded-square.png"
                alt="rounded-square"
              />
              ANTILLANA
            </li>
            <li>
              <img
                width="15"
                height="15"
                style={{ marginRight: "5px" }}
                src="https://img.icons8.com/ios/50/737373/rounded-square.png"
                alt="rounded-square"
              />
              AQUA
            </li>
            <li>
              <img
                width="15"
                height="15"
                style={{ marginRight: "5px" }}
                src="https://img.icons8.com/ios/50/737373/rounded-square.png"
                alt="rounded-square"
              />
              ATLANTIC FS
            </li>
            <li>
              <img
                width="15"
                height="15"
                style={{ marginRight: "5px" }}
                src="https://img.icons8.com/ios/50/737373/rounded-square.png"
                alt="rounded-square"
              />
              B - GETAL
            </li>
            <li>
              <img
                width="15"
                height="15"
                style={{ marginRight: "5px" }}
                src="https://img.icons8.com/ios/50/737373/rounded-square.png"
                alt="rounded-square"
              />
              CACIQUE
            </li>
            <li>
              <img
                width="15"
                height="15"
                style={{ marginRight: "5px" }}
                src="https://img.icons8.com/ios/50/737373/rounded-square.png"
                alt="rounded-square"
              />
              CARULLA
            </li>
            <li>
              <img
                width="15"
                height="15"
                style={{ marginRight: "5px" }}
                src="https://img.icons8.com/ios/50/737373/rounded-square.png"
                alt="rounded-square"
              />
              CERTIFIED ANGUS BEEF
            </li>
            <li>
              <img
                width="15"
                height="15"
                style={{ marginRight: "5px" }}
                src="https://img.icons8.com/ios/50/737373/rounded-square.png"
                alt="rounded-square"
              />
              Del Primo Foods
            </li>
          </div>
          <li className="titulo-filtros3"></li>
          <li className="titulo-filtros">Sub-Categoría</li>
          <li className="titulo-filtros2">Temperatura de Almacenamiento</li>
          <li>
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Congelada
          </li>
          <li>
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Congelado
          </li>
          <li>
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Refrigerado
          </li>
          <li className="titulo-filtros3">
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Sin Refrigerar
          </li>
          <li className="titulo-filtros2">Vendido Por</li>
          <li className="titulo-filtros3">
            <img
              width="15"
              height="15"
              style={{ marginRight: "5px" }}
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
            />
            Otros Vendedores
          </li>
        </ul>
      </div>
    </>
  );
};

export default ParteUno;

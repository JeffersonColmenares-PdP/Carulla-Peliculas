import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer1">
          <div className="text-footer">
            <img
              width="35"
              height="35"
              className="img-footer1"
              src="https://img.icons8.com/ios-filled/50/1A1A1A/packaging.png"
              alt="packaging"
            />
            Más de 100 mil productos
          </div>
          <div className="text-footer">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/ios-filled/50/1A1A1A/security-shield-green.png"
              alt="security-shield-green"
            />
            Compras seguras
          </div>
          <div className="text-footer">
            <img
              width="55"
              height="55"
              src="https://carulla.vtexassets.com/assets/vtex.file-manager-graphql/images/b44a35c7-2040-44a8-979a-99635c8ede72___053e2c7bd339fd62c83242de4c0b8cfb.svg"
              alt="security-shield-green"
            />
            Acumulas Puntos
          </div>
          <div className="text-footer">
            <img
              width="50"
              height="50"
              src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/11e37819-2172-4b69-be65-b225fd404b69___76988c6a72afacfe44d0d8b61d14efd9.svg"
              alt="security-shield-green"
            />
            Paga en línea o efectivo
          </div>
        </div>
      </div>
      <div className="info-footer">
        <div className="contactanos">
          <div className="titulo-info">Contáctanos</div>
          <div className="texto-ventas">
            <div>Ventas Whatsapp:(+57) 305 261 44 67</div>
            <div>Servicio al cliente whatsapp:(+57) 305 261 54 42</div>
            <div>Línea de servicio al cliente nacional:01 8000 428 800</div>
            <div>Medellín:(4) 604 19 19</div>
            <div>Resto de ciudades</div>
          </div>
        </div>
        <div className="suscribete">
          <div className="titulo-info">Suscríbete a nuestro newsletter</div>
          <div>Entérate de nuestras ofertas y lanzamientos exclusivos</div>
          <div>
            <input
              className="buscar-info"
              type="text"
              placeholder="Ingresa tu correo"
            />
            <button className="btn-suscribete">Suscríbete</button>
          </div>
          <div className="terminos">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/737373/rounded-square.png"
              alt="rounded-square"
              style={{ marginRight: "10px" }}
            />
            Acepto términos y condiciones, términos y condiciones marketplace y
            autorizo el tratamiento de mis datos personales con las siguientes
            condiciones.
          </div>
        </div>
        <div className="descarga">
          <div className="titulo-info">¡Descarga gratis la app!</div>
          <img src="/src/assets/descarga.JPG" alt="" />
          <div>Siguenos en:</div>
          <div className="siguenos">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/material-outlined/24/737373/facebook-new.png"
              alt="facebook-new"
            />
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/pulsar-line/48/737373/twitter-circled.png"
              alt="twitter-circled"
            />
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/fluency-systems-filled/48/737373/instagram-new.png"
              alt="instagram-new"
            />
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/sf-regular/48/737373/youtube-play.png"
              alt="youtube-play"
            />
          </div>
          <div>Tus compras seguras con:</div>
          <div className="compras-seguras">
            <img
              src="https://carulla.vtexassets.com/assets/vtex.file-manager-graphql/images/ef2c67aa-8384-43fa-b22a-b4a0238b09a9___fa9f09bfb21e7b0e90efbd41832f8430.png"
              alt=""
            />
            <img
              src="https://carulla.vtexassets.com/assets/vtex.file-manager-graphql/images/75b400e0-5e9b-471e-90d7-88711a2ee1ed___8bd9c0f79a4a301f1fab4c087ce4d2b8.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mas-informacion">
        Más información{" "}
        <img
          width="18"
          height="18"
          src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/25/1A1A1A/external-up-arrow-arrows-inkubators-detailed-outline-inkubators-2.png"
          alt="external-up-arrow-arrows-inkubators-detailed-outline-inkubators-2"
        />
      </div>
      <div className="ayuda">
        <div>
          Centro de ayuda{" "}
          <img
            width="10"
            height="10"
            src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/25/1A1A1A/external-up-arrow-arrows-inkubators-detailed-outline-inkubators-2.png"
            alt="external-up-arrow-arrows-inkubators-detailed-outline-inkubators-2"
          />
        </div>
        <div>
          Información de interés{" "}
          <img
            width="10"
            height="10"
            src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/25/1A1A1A/external-up-arrow-arrows-inkubators-detailed-outline-inkubators-2.png"
            alt="external-up-arrow-arrows-inkubators-detailed-outline-inkubators-2"
          />
        </div>
        <div>
          Información legal{" "}
          <img
            width="10"
            height="10"
            src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/25/1A1A1A/external-up-arrow-arrows-inkubators-detailed-outline-inkubators-2.png"
            alt="external-up-arrow-arrows-inkubators-detailed-outline-inkubators-2"
          />
        </div>
      </div>
      <div className="visita-tambien">
        <div className="visita-left">
          <div>Visita también:</div>
          <img
            src="https://carulla.vtexassets.com/assets/vtex.file-manager-graphql/images/d6e01346-0eb3-4021-adfd-5cb19e006ef6___c1f75aecb6d9d3ba355a7d001cd84890.svg"
            alt="Logo 1"
          />
          <img
            src="https://carulla.vtexassets.com/assets/vtex.file-manager-graphql/images/ba6c1c2a-cb95-474e-bbf8-4d53f627381a___a79f826343204ac4f5b1c950f67cdcff.svg"
            alt="Logo 2"
          />
          <img
            src="https://carulla.vtexassets.com/assets/vtex.file-manager-graphql/images/ef1bd9c9-90e2-4e1d-a696-1faa6d891e11___bccf98e6e64d5e73f0fe90e3c9dd482c.svg"
            alt="Logo 3"
          />
          <img
            src="https://carulla.vtexassets.com/assets/vtex.file-manager-graphql/images/167da120-e1c3-461a-a720-edc192951653___b42223108784f05c6cc60d92ce136504.svg"
            alt="Logo 4"
          />
        </div>
        <div className="visita-right">
          <div>
            2022 Carulla ® marca registrada de Grupo Éxito S.A. NIT 890900608-9.
            Todos los derechos reservado
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
import { useState } from "react";
import Buscador from "../buscador/Buscador";

const Gallery = ({ array }) => {
  const [filtro, setFiltro] = useState("");
  //   console.log(array);
  //   esto sería lo mismo que estamos haciendo abajo en el return con el mapeo, que recorremos nuestro array y le decimos que cada elemento de nuestro array se llame elemento, y nuestro iterador pues nuestro controla las posiciones
  //   for (const elemento of array) {
  //      const li$$ = document.createElement("li")
  //      li$$.textContent=elemento
  //   }
  //   for (let i = 0; i < array.length; i++) {
  //     const elemento = array[i];

  //   }
  const arrayFiltrado = array.filter((elemento) =>
    elemento.title.toLowerCase().includes(filtro)
  );
  //   console.log(filtrar);

  return (
    <div>
      <Buscador setFiltro={setFiltro} />
      <ul>
        {arrayFiltrado.map((elemento, i) => {
          {
            /* console.log(elemento) */
          }
          return (
            <li key={i}>
              <figure>
                <h2>{elemento.title}</h2>
                <img src={elemento.image} alt={elemento.title} />
              </figure>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Gallery;

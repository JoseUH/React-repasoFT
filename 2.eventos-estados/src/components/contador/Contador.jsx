import { useState } from "react";

const Contador = () => {
  // let resultado = 0;
  //   resultado es una variable de lectura, y la que utilizamos para modificar es el seteador que es donde el valor que tiene nuestro resultado, y nuestra variable resultado tendra como valor inicial el 0
  const [resultado, setResultado] = useState(0);
  const contador = (ev) => {
    if (ev.target.innerText === "+") {
      setResultado(resultado + 1);
    } else {
      setResultado(resultado - 1);
    }
    // console.log(resultado);
    // resultado++
    // console.log(resultado);
    // resultado=resultado+1
  };
  return (
    <div>
      <button onClick={contador}>+</button>
      <h2>{resultado}</h2>
      <button onClick={contador}>-</button>
    </div>
  );
};

export default Contador;

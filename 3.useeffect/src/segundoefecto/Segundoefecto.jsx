import { useEffect, useState } from "react";

const Segundoefecto = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
      console.log("funciona");
    }, 3000);
  }, []);

  return (
    <div>
      <h2> Segundoefecto</h2>
      <p>{!visible ? <img src="https://cdn.dribbble.com/users/2346349/screenshots/9246147/loading.gif" alt="gif loading" /> : <p>Este es el contenido </p>}</p>
    </div>
  );
};

export default Segundoefecto;

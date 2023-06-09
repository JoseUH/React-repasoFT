import { useEffect, useState } from "react"

const Tercerefecto = () => {
    const [estado,setEstado] = useState(0)
    console.log("este es mi renderizado")
    useEffect(() => {
        console.log("soy el useEffect");
    },[estado])

  return (
    <div>
        <h2>Tercer Efecto</h2>
        <button onClick={()=> setEstado(estado+1)}>+</button>
        <p>{estado}</p>
    </div>
  )
}

export default Tercerefecto
import Carta from "./Carta/Carta"
import "./Gallery.scss"


const Gallery = ({miArray}) => {
// const Gallery = (miArray) => {
// console.log(miArray.miArray)

console.log(miArray)
  return (
    <div>
        {miArray.map((elemento)=>{
            return(
                <Carta key={elemento.id} elemento={elemento}/>
            )
        })}
    </div>
  )
}

export default Gallery
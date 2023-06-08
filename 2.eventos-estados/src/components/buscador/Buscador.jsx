const Buscador = ({setFiltro}) => {
    
    const obtenerValor = (ev) => {
        setFiltro(ev.target.value.toLowerCase());
    }
  return (
    <>
        <input onInput={obtenerValor} type="text"/>
    </>
  )
}

export default Buscador
const Carta = ({elemento}) => {
    console.log(elemento);
  return (
    <figure key={elemento.id}>
      <h3>{elemento.title}</h3>
      <img src={elemento.image} alt={elemento.title} />
    </figure>
  );
};

export default Carta;

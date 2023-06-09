import { useEffect, useState } from "react";
import axios from "axios"
const Cuartoefecto = () => {
  // "https://starwars-server.vercel.app/characters"
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacter = async () => {
        const characterApi = await axios.get("https://starwars-server.vercel.app/characters")
        setCharacters(characterApi.data.data.characters);
        console.log(characterApi);
    //   const characterApi = await fetch(
    //     "https://starwars-server.vercel.app/characters"
    //   );
    //   const characterJson = await characterApi.json();
    //   setCharacters(characterJson.data.characters);
    };
    getCharacter();
  }, []);

  return (
    <div>
      {characters.length ? (
        <ul>
          {characters.map((character, i) => (
            <li key={i}>{character.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default Cuartoefecto;

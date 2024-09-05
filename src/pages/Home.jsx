import React, { useEffect, useState } from 'react';
import { getAllMemes } from '../services/memeServices';

const Home = () => {
  const [memes, setMemes] = useState([]); // Definir estado para almacenar los memes

  const fetchData = async () => {
    const data = await getAllMemes(); // Llamar la función que obtiene los memes
    setMemes(data); // Guardar los datos en el estado
  };

  useEffect(() => {
    fetchData(); // Llamar fetchData cuando se monta el componente
  }, []);

  return (
    <div>
      <h1>Lista de Memes</h1>
      <ul>
        {memes.map((meme) => (
          <li key={meme.id}>
            <h2>{meme.name}</h2>
            <img src={meme.url} alt={meme.name} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

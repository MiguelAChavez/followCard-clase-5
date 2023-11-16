import { useEffect, useState } from "react";
import "./App.css";
import { DATA_USERS } from "./Data";
import FollowCard from "./components/followCard";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
function App() {
  
  const [Pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      })
      .catch(() => {
        console.log("Error 😥");
      });
  }, []);

  return (
    <>
      <section className="followCards-container">
        <h2>A quién seguir</h2>
        {DATA_USERS.map((user) => (
          <FollowCard
            key={user.Usuario}
            Usuario={user.Usuario}
            siguiendo={user.siguiendo}
          >
            {user.nombre}
          </FollowCard>
        ))}
      </section>
      <section className="followCards-container">
        {Pokemon.map((pokemon) => (
          <p key={pokemon.name}>{pokemon.name}</p>
        ))}
      </section>
    </>
  );
}

export default App;

import React from "react";
import "./styles.css";
import mockPokemonsData from "./mock/pokeData.js";
import PokeCard from "./components/PokeCards";

export default function App() {
  const PokeData = mockPokemonsData;
  PokeData.sort((a, b) => (a.name > b.name ? 1 : -1));
  return (
    <div className="App">
      <h1>2o. Challenge: Loops</h1>
      {PokeData.map((Poke) => (
        <PokeCard {...Poke} />
      ))}
    </div>
  );
}

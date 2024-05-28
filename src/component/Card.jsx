import React from "react";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="inner-card">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image} alt={pokemon.name} />
        <h3>Species - {pokemon.species}</h3>
        <h3>{pokemon.hp} Hp</h3>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import "./modal.css"

export default function Modal({ pokemon, setDadosPokemon }) {
    if (pokemon) {
        return (
        <div className="container">
            <div className="janela">
                <button onClick={()=> setDadosPokemon('')}>Fechar</button>
                {pokemon && (
                    <>
                        <>
                            <h2>{pokemon.name}  Nº{pokemon.id}</h2>
                            <div>
                                <p>HP: {pokemon.stats[0].base_stat}</p>
                                <p>Attack: {pokemon.stats[1].base_stat}</p>
                                <p>Defense: {pokemon.stats[2].base_stat}</p>
                                <p>Special Attack: {pokemon.stats[3].base_stat}</p>
                                <p>Special Defense: {pokemon.stats[4].base_stat}</p>
                                <p>Speed: {pokemon.stats[5].base_stat}</p>
                            </div>
                        </>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </>
                )}
            </div>
        </div>
        );
    }

    return null
}
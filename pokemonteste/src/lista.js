import './lista.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Modal from './components/modal';
import pesquisar from './utils/pesquisa';

function Lista() {
  const [todosPokemons, setTodosPokemons] = useState(null);
  // const [openModal, setOpenModal] = useState(false)
  const [dadosPokemon, setDadosPokemon] = useState()

  const voltar = () => {
    window.location = '/';
  };


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(function (response) {
        setTodosPokemons(response.data);
      })
      .catch(function (error) {
        console.error("Erro ao buscar pokémons:", error);
      });
  }, []);
console.log(dadosPokemon, 'dadosPokemon')
  return (
    <div className='corpo'>
      <div>
        <button className='botaoVoltar' onClick={voltar}>Voltar</button><br />
        <div className='listapokemons'>
          {todosPokemons?.results?.map(pokemon => {
            return (
              <button className='pokemons' onClick={() => pesquisar(pokemon?.name, setDadosPokemon)}>{pokemon?.name}</button>
            )
          })}
          <Modal pokemon={dadosPokemon} setDadosPokemon={setDadosPokemon}/>  
        </div>
      </div>
    </div>
  );
}

export default Lista;

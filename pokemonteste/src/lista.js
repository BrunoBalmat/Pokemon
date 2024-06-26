import './lista.css';
import "./components/modal/modal.css"
import './App.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Modal from './components/modal';

function Lista() {
  const [todosPokemons, setTodosPokemons] = useState(null);
  const [openModal, setOpenModal] = useState(false)
  const [dadosPokemon, setDadosPokemon] = useState()

  const pesquisar = (nome) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
      .then(function (response) {
        setDadosPokemon(response.data);
        setOpenModal(true);
      })
      .catch(function (error) {
        console.error("Erro ao buscar pokemon", error);
        alert("Pokemon não encontrado verifique o nome digitado")
      });


  }
  console.log(dadosPokemon)
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(function (response) {
        setTodosPokemons(response.data);
      })
      .catch(function (error) {
        console.error("Erro ao buscar pokémons:", error);
      });
  }, []);

  return (
    <div className='corpo'>
      <div className='listapokemons'>
        {todosPokemons?.results?.map(pokemon => {
          return (
            <button className='pokemons' onClick={() => pesquisar(pokemon?.name)}>{pokemon?.name}</button>
          )
        })}
        <Modal isOpen={openModal} setCloseModal={() => setOpenModal(false)}>
          {dadosPokemon?.name} {dadosPokemon?.id}<br />          
          <br />
          {/* {dadosPokemon?.sprites.front_default}<br/> */}
          HP={dadosPokemon?.stats[0].base_stat}<br />
          Atack={dadosPokemon?.stats[1].base_stat}<br />
          DEFENSE={dadosPokemon?.stats[2].base_stat}<br />
          SPECIAL-ATACK={dadosPokemon?.stats[3].base_stat}<br />
          SPECIAL-DEFENSE={dadosPokemon?.stats[4].base_stat}<br />
          SPEED={dadosPokemon?.stats[5].base_stat}<br />
        </Modal>
      </div>
    </div>
  );
}

export default Lista;

import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Modal from './components/modal';
import pokebolaImage from './props/pokebola.png';

function App() {
  const [nomePokemon, setNomePokemon] = useState('');
  // const [openModal, setOpenModal] = useState(false);
  const [dadosPokemon, setDadosPokemon] = useState(null);

  const entrar = () => {
    window.location = '/lista';
  };

  const pesquisar = () => {
    if (nomePokemon) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLowerCase()}`)
        .then(function(response) {
          setDadosPokemon(response.data);
        })
        .catch(function(error) {
          console.error("Erro ao buscar pokemon", error);
          alert("Pokemon não encontrado. Verifique o nome digitado.");
        });
    }
  };

  return (
    <div >
      <div className='corpo'>
        <div className="pesquisa">
          <div>
            <input
              placeholder="Pokémon"
              type="text"
              onChange={(e) => setNomePokemon(e.target.value)}
            />
            <button className='botaoPesquisar' onClick={pesquisar}>
            <img src={pokebolaImage} alt='Pesquisar' />
          </button><br />
            <button className='botaoTodos' onClick={entrar}>All Pokemons</button>
          </div>
        </div>
      </div>
      <Modal
        setDadosPokemon={setDadosPokemon} 
        pokemon={dadosPokemon} 
      />
    </div>
  );
}

export default App;

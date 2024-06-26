import './App.css';
import React, { useState } from 'react';
import axios from 'axios'
import Modal from './components/modal';

function App() { 
  
  const [nomePokemon, setNomePokemon] = useState ('')
  const  [openModal, setOpenModal] = useState (false)
  const [dadosPokemon, setDadosPokemon] = useState ()

  const entrar = () => {
    window.location = '/lista'
  }
  const pesquisar = () => {    
    nomePokemon && axios.get(`https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLocaleLowerCase()}`)
      .then(function(response) {
        setDadosPokemon(response.data);       
        setOpenModal(true);
      })
      .catch(function(error){
        console.error("Erro ao buscar pokemon", error);
        alert("Pokemon não encontrado verifique o nome digitado")
      });

  }
  return (
    <div className='corpo'>
      <div className="pesquisa">
        <input placeholder="Pokémon" type="text" onChange={(e) => setNomePokemon(e.target.value)}></input>
        <button onClick={pesquisar}>Search</button><br/>
        <button onClick={()=> entrar()}>All Pokemons</button>        
      </div>
      <Modal isOpen={openModal} setCloseModal={()=> setOpenModal(false)}>
        {dadosPokemon?.name} numero {dadosPokemon?.id}<br/>
        <br/> 
        <img src={dadosPokemon?.sprites.front_default} alt={dadosPokemon.name}></img>    
        <br/>
          HP={dadosPokemon?.stats[0].base_stat}<br />
          Atack={dadosPokemon?.stats[1].base_stat}<br />
          DEFENSE={dadosPokemon?.stats[2].base_stat}<br />
          SPECIAL-ATACK={dadosPokemon?.stats[3].base_stat}<br />
          SPECIAL-DEFENSE={dadosPokemon?.stats[4].base_stat}<br />
          SPEED={dadosPokemon?.stats[5].base_stat}<br />    
      </Modal>
    </div>
  );
}

export default App;

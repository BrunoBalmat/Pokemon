import axios from 'axios'
const pesquisar = (nome, setDadosPokemon) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
      .then(function (response) {
        setDadosPokemon(response.data);
      })
      .catch(function (error) {
        console.error("Erro ao buscar pokemon", error);
        alert("Pokemon não encontrado verifique o nome digitado")
      });
  }
  

  export default pesquisar
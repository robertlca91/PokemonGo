import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState({})
  const [isDecimeters, setIsDecimeters]=useState(true)

  const [isHectogramos, setIsHectogramos]=useState(true)

   useEffect(()=>{
    changePokemon()
  },[])
  const changePokemon=()=>{
    const randomId=Math.floor(Math.random()*600)+1
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    .then(res=>setPokemon(res.data))
  }
console.log(pokemon)
  return (
    <div className="App">

      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
      <p><b>weight:</b> {isHectogramos? pokemon.weight:pokemon.weight/10}  {isHectogramos? 'hectogramos':'kilogramos'} </p>
      <p><b>height:</b> {isDecimeters? pokemon.height/10: pokemon.height} {isDecimeters? 'meters':'decimeters'}</p>      
      <p><b>type:</b>{pokemon.types?.[0].type.name}</p>
      <button onClick={()=> setIsDecimeters(!isDecimeters)}>change height</button>
      <button onClick={()=> setIsHectogramos(!isHectogramos)}>change weight</button>
      <br />
      <button onClick={changePokemon}>change Pokemon</button>
    </div>
  )
}

export default App

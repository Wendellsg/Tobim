import { useState } from 'react';
import './App.css';
import toby from './assets/toby.jpeg'
import pum from './assets/HumanFart.mp3'

function App() {

  const texto = 'Toby'

  const [msg, setMsg] = useState('');

  const [count, setCount] = useState(0);

  const [caixa, setcaixa] = useState('')



  const audio = new Audio(pum);


  function handleclick(){
    setCount(count + 1)
    audio.play();

    if(count >= 5){
      setcaixa('a')
      setMsg("Ai minha barriguinha");
    }

    if(count >= 10){
      setMsg("Não aguento mais cagaaaar");
    }
    if(count >= 15){
    setMsg("É muito cocôoooooo");
    }
  }


  return (
    
    <div className="App">
      <p className={`msg ${caixa}`}>{msg}</p>
      <img className="toby" src={toby} alt=""/>
      <h1 className='titulo'>{texto} cagou {count} vezes</h1>

      <p>Click e faça o Toby cagar</p>
       <button onClick={handleclick}>
        
       </button>



    </div>
    
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ temperatura, setTemperatura ] = useState(0);
  const [ converterPara, setConverterPara ] = useState('Fahrenheit');
  const [ temperaturaConvertida, setTemperaturaConvertida ] = useState(0);
  const [ txtResultado, setTxtResultado ] = useState("");

  const converterTemperatura = (conversor, temperatura) => {
    const endpoint = "http://localhost:8080";
    const params = `?conversor=${conversor}&temperatura=${temperatura}`;
    
    fetch(endpoint + params, {
      method:'Get',
      headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
      },
    })
    .then((r)=>r.json())
    .then( (resp) => {
      setTemperaturaConvertida(resp.temperatura);
      
      const newTxtResultado = conversor == "C" ? "Celsius" : "Fahrenheit";

      setTxtResultado(`Grau ${newTxtResultado}`);
    })
    .catch(console.log);
  }

  useEffect(() => { converterTemperatura(converterPara[0], temperatura); }, []);

  const handleTemperatura = (event) => {
    const novaTemperatura = event.target.value
    setTemperatura(novaTemperatura);

    converterTemperatura(converterPara[0], novaTemperatura);
  }

  const handleSelect = (event) => {
    const selected = event.target.value;
    const newConverterPara = selected == "Celsius" ? "Fahrenheit" : "Celsius";
    
    setConverterPara(newConverterPara);
    converterTemperatura(newConverterPara[0], temperatura);
  }

  return (
    <div className="App">

      <div className="container">
        <h1>Conversor de temperatura</h1>

        <div className="box-conversor">
          <div className="box-temperatura">
            <input id="input" type="number" value={ temperatura } onChange={ handleTemperatura }/>
            
            <select id="select" onChange={ handleSelect }>
              <option value="Celsius">Grau Celsius</option>
              <option value="Fahrenheit">Grau Fahrenheit</option>
            </select>
          </div>

          <div className="box-igual">=</div>
          <div className="box-temperatura">
            <input id="input" type="number" value={ temperaturaConvertida } disabled />
            
            <div className="label-convertido">
              { txtResultado }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';

function App (props){

const modificarNome = event => {
  console.log(event.target.value)
}

const criaCombobox=() => {
  const opcoes = ["fulano","ciclano"]
  const comboBoxopcoes = opcoes.map( opcao => <option>{opcao}</option>)

  return (
    <select>
      {comboBoxopcoes}
    </select>
  )
}

  const MeuComboBox = () => criaCombobox()

  return(
    <>
      <input type="text" value={props.nome} onChange={modificarNome} />
      <h1>Olá {props.nome} </h1>
      <MeuComboBox />
    </>
  )
}


export default App;

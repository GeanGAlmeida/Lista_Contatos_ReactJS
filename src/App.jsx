import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ListaDeContatos() {
 const[contatos, setContatos] = useState([]);
 const[nome, setNome] = useState('');
 const[telefone, setTelefone] = useState('');

 const adicionarContatos = () => {
  if(nome && telefone){
    setContatos([...contatos,{nome, telefone}]);
    setNome('');
    setTelefone('');
  }
 };
 return(
  <div>
    <h2>Lista de Contatos</h2>
    <div className='input-lado'>
    <div>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome' />
    </div>
    <div>
      <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder='Telefone' />
      </div>
      <button onClick={adicionarContatos}>Adicionar Contatos</button>
    </div>
    <ul>
      {contatos.map((contato, index) => 
      <li key={index}> <strong>{contato.nome}:</strong> {contato.telefone}</li>
      )}
    </ul>
  </div>
 );
}

export default ListaDeContatos

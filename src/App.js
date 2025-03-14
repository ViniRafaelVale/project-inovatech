import React, { useState } from "react";
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Secao from "./componentes/Secao/Secao";

function App() {
  const[produtos,setProdutos]=useState( [] )
  const adicionaProduto=(produto)=>{
    const novaListaProdutos=produtos.slice();
    novaListaProdutos.push(produto)
    setProdutos(novaListaProdutos)

  }

  const secaos = [
    {
      secao: 'Computadores',
      corPrimaria: '#d2d9f4',  
      corSecundaria: '#1a1a1a'
    },
    {
      secao: 'Acessórios',
      corPrimaria: '#a580f6',  
      corSecundaria: '#1a1a1a'  
    },
    {
      secao: 'Impressoras',
      corPrimaria: '#9baff4',  
      corSecundaria: '#1a1a1a'  

    },
    {
      secao: 'Games',
      corPrimaria: '#6c53a2',  
      corSecundaria: '#1a1a1a'   
    },
    {
      secao: 'Gadgets',
      corPrimaria: '#49636f',  
      corSecundaria: '#1a1a1a'  
    }
  ]
    
  const listaSecaos=secaos.map(secao=>secao.secao)
    return (
    <div className="App">
      <Banner/>
      <Formulario secaos={listaSecaos} aoProdutoCadastrado={produto=>adicionaProduto(produto)}/>
      {secaos.map((secao) => ( <Secao key={secao.secao} secao={secao.secao} 
      corPrimaria={secao.corPrimaria} 
      corSecundaria={secao.corSecundaria}
      produtos={produtos.filter(produto=>produto.secao===secao.secao)} /> ))}
    </div>
  );

}

export default App;
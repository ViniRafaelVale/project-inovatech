import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import { useState } from "react";
import RadioButton from "../RadioButton/RadioButton";

const Formulario=(props)=>{
    const marcas = [
        { nome: "HP", imagem: "https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/106019/regular_hp.jpg" },
        { nome: "Dell", imagem: "https://static.vecteezy.com/system/resources/previews/012/871/379/non_2x/dell-brand-icon-illustration-top-tech-company-logotype-free-png.png" },
        { nome: "Positivo", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsFfCnFyt-dbtZpJXJvwsy-DMVByNP3uJxrQ&s" },
        { nome: "Asus", imagem: "https://vstecsindo.net/wp-content/uploads/2020/01/asus.jpg" },
        { nome: "Xing Ling Genérico", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fLx4U8Cgbhr1oKDK65fnbhqCo-LJuZckvg&s" }
    ];
  
    const estados = ['Novo','Usado']

    const[secao,setSecao]=useState('Computadores')
    const[marca,setMarca]=useState({nome:"HP",imagem:"/imagens/hp.png"});
    const[nome,setNome]=useState('')
    const[preco,setPreco]=useState('')
    const[situacao,setSituacao]=useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoProdutoCadastrado(
            {
            "secao":secao,
            "marca":marca.imagem,
            "nome":nome,
            "preco":preco,
            "situacao":situacao
            }
        );
    }
  
    return(
        <section className="formulario" >
            <form onSubmit={aoSalvar}>
                <h2>Dados do Produto</h2>
                <ListaSuspensa label="Seção:" itens={props.secaos} aoAlterado={valor=>setSecao(valor)}/>
                <ListaSuspensa label="Marca:" itens={marcas.map(m => m.nome)} 
                    aoAlterado={(valor)=>{
                    const marcaEscolhida=marcas.find(marca=>(marca.nome===valor));
                    setMarca(marcaEscolhida)}}/>

                <CampoTexto label="Nome:" placeholder="Digite o nome do produto" aoAlterado={valor=>setNome(valor)}/>
                <CampoTexto label="Preço:" placeholder="Digite o preço do produto" aoAlterado={valor=>setPreco(valor)}/>
                <RadioButton itens={estados} aoAlterado={valor=>setSituacao(valor)}/>
                <Botao>Inserir Produto</Botao>
            </form>
        </section>
    )
}

export default Formulario
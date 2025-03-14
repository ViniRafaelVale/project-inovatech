import Produto from "../Produto/Produto";
import "./Secao.css";

const Secao=(props)=>{
    const corFundo={
        backgroundColor:props.corSecundaria
    }

    const corSublinhado={
        borderColor:props.corPrimaria
    }

    return(
        (props.produtos.length>0)?<section className="secao" style={corFundo}>
            <h3 style={corSublinhado}>{props.secao}</h3>

            <div className="produtos">
            {props.produtos.map(produto=>     
            <Produto 
                key={produto.nome} 
                nome={produto.nome} 
                marca={produto.marca}  
                preco={produto.preco} 
                situacao={produto.situacao}
            />

            )}</div>
        </section>
        :''

    )
};

export default Secao
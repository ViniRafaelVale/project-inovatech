import "./Produto.css"

const Produto=(props)=>{
    return(
        <div className="produto">
            <div className="cabecalho">
                <img src={props.marca} alt={props.marca.nome}/>
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <p>{props.preco}</p>
                <p>{props.situacao}</p>
            </div>
        </div>
    )
}

export default Produto;
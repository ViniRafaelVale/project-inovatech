import "./ListaSuspensa.css";

const ListaSuspensa=(props)=>{
    const aoEscolhido=(evento)=>{
        props.aoAlterado(evento.target.value)
    }
    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={aoEscolhido}>
            { props.itens.map( item => {
            let valorItem=item;
            if (typeof item !="string") valorItem=item.nome;
            return(
            <option key={valorItem}>{valorItem}</option>);
            }) }
            </select>
        </div>
    )
}

export default ListaSuspensa;
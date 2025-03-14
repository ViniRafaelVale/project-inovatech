import "./RadioButton.css"

const RadioButton=(props)=>{
    const aoEscolhido=(evento)=>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="radio-button">
                {props.itens.map(item => (
                    <label key={item}>
                        <input
                            type="radio"
                            value={item}
                            name='opcao'
                            onChange={aoEscolhido}
                        />
                        {item}
                    </label>
                ))}
        </div>
    )
}

export default RadioButton;
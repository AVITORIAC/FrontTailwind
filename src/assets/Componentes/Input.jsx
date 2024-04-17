import React from 'react'

function Input(props) { // INPUT COM BORDA AZUL 
    
    return (
        <div>
            <label for="price" className="block text-base font-medium leading-6 mb-2 font-roboto text-gray-900">{props.label}</label>
            <input value={props.value} onChange={props.onChange} type={props.type} className="block w-80 py-1.5 pl-2 text-black ring-1  focus:ring-indigo-400 placeholder:text-black font-roboto" placeholder="Insira um texto" />
        </div>
    )
}

export default Input








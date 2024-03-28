import React from 'react'

function InputRoxo({ label }) {
    return (
        <div>
            <label for="price" className="block text-sm font-medium mb-1 text-gray-900">{label}</label>
            <input type="text" className="block w-80 py-1.5 pl-2 text-black ring-1  ring-roxo placeholder:text-black" placeholder="Insira um texto"></input>
        </div>
    )
}

export default InputRoxo

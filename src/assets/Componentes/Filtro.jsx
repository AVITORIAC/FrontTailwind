import React from 'react'

function Filtro({ label, optionList }) {
    return (
        <div>
            <label for="price" className="block text-sm font-medium leading-6 mb-2 text-gray-900">{label}</label>
            <select class="block w-80  py-1.5 pl-2  text-black ring-1  focus:ring-indigo-400 sm:text-sm" >
                {optionList.map((val) => (
                    <>
                        <option value="val">{val}</option>
                    </>
                ))}
            </select>
        </div>
    )
}

export default Filtro



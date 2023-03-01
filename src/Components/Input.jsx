import React from "react";

const Input = ({value, placeholder, onChangeProps}) => {

    return(
        <input  onChange={onChangeProps} type="text" className="w-96 border px-5 py-3 outline-none rounded-lg" placeholder={placeholder}/>
    )
}

export default Input
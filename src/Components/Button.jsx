import React from "react";

function Button({disabled=false, children="Button", onClick}) {
    return(
        <button onClick={onClick} className=" border py-3 px-5 rounded-lg text-blue-400 border-blue-400 font-bold" disabled={disabled}>{children}</button>
    )
}

export default Button

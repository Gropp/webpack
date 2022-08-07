import React from "react";

// botao generico com a funcao de somente disparar o click
const Button = ({children, onClick}) => (
    <button onClick={onClick}>{children}</button>
)

export default Button
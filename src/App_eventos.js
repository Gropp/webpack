import React from "react"



const App = () => {

    const name = 'Digital Innovation One'

    const handleChange = (e) => {
        const {value} = e.target
        console.log(value)
    }
    
    const showEvent = (e) => {
        console.log('evento clicado')
        console.log(e)
        alert(name)
    }
    
    const Button = <button onClick={showEvent}>Mostra Evento</button>
    const deleteButton = <button onClick={showEvent}>Deletar Eventos</button>

    return (
        <div>
            <p>Digital Innovation One</p>
            <p>React + Babel</p>
            <input onChange={handleChange} />
            {Button }
            {deleteButton}
        </div>
    );
};

export default App;
import React from "react"

const buttonA = <button>Historico dos Clientes</button>
const buttonB = <button>Ativar</button>
const buttonC = <button>Alterar Cadastro</button>
const buttonD = <button>Cadastrar</button>

const hasCustomer = true
const hasElement = false

const renderShowCadastro = () => {
    <div>
       Clique no botão para Alterar o Cadastro do Cliente
       {buttonC} 
    </div>
}

const renderAddCadastro = () => {
    <div>
       Clique no botão para Adicionar o Cadastro do Cliente
       {buttonD} 
    </div>
}

const showCustomer = () => {
    if (!hasCustomer) return null
    return (
        <div>
            <h1>Nome do Cliente: Fernando Gropp</h1>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <p>Digital Innovation One</p>
            <p>React + Babel</p>
            {/* se a variavel for falsa nao mostra o bloco de codigo */}
            {hasCustomer && (
            <div>
                Clique no botao abaixo para visualizar o historico dos Clientes:
                <p>{buttonA}</p>
            </div>   
            )}
            
            {hasElement ? (
                <div>
                    <p>O Elemento esta ativo</p>                    
                </div>
            ):(
                <div>
                    Clique abaixo para ativar:
                    <p>{buttonB}</p>
                </div>
            )}
            <div>
                <p>Clientes</p>
                <p>Bem vindos</p>
                {hasCustomer ? renderShowCadastro() : renderAddCadastro()}
            </div>
            {showCustomer()}
        </div>
    );
};
export default App;
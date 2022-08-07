import React from "react"

const buttonA = <button>Historico dos Clientes</button>
const buttonB = <button>Ativar</button>
const buttonC = <button>Alterar Cadastro</button>
const buttonD = <button>Cadastrar</button>

const hasCustomer = true
const hasElement = false

const listCustomer = [
    {
        id: 1,
        name: 'Joao da Silva',
        skills: ['HTML', 'CSS']
    },
    {
        id: 2,
        name: 'Maria da Silva',
        skills: ['LOL', 'BF4']
    },
    {
        id: 3,
        name: 'Pepa da Silva',
        skills: ['JAVA', 'JS', 'NODE']
    },
    {
        id: 4,
        name: 'Carlos da Silva',
        skills: ['Bebe', 'come', 'anda']
    },
    {
        id: 5,
        name: 'Ana da Silva',
        skills: ['le', 'escreve']
    }
]

const App = () => {

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li >{customer.name}</li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{padding: '10px'}} key={`skill-${index}`}>
                <li>{skill}</li>
            </div>
        )
    }

    const renderShowCadastro = (
        <div>
        Clique no botão para Alterar o Cadastro do Cliente
        <br/>
        {buttonC} 
        </div>
    )

    const renderAddCadastro = ( 
        <div>
        Clique no botão para Adicionar o Cadastro do Cliente
        <br/>
        {buttonD} 
        </div>
    )

    const showCustomer = () => {
        if (!hasCustomer) return null
        return (
            <div>
                <h1>Nome do Cliente: Fernando Gropp</h1>
            </div>
        )
    }

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
                {hasCustomer ? renderShowCadastro : renderAddCadastro}
            </div>
            {showCustomer()}

            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};

export default App;
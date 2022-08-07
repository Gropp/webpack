import React from "react"
import Button from "../components/Button"
import mock from "../mock"

const buttonA = <button>Historico dos Clientes</button>
const buttonB = <button>Ativar</button>
const buttonC = <button>Alterar Cadastro</button>
const buttonD = <button>Cadastrar</button>

const hasCustomer = true
const hasElement = false

const App = () => {

    const handleClick = (id) => {
        console.log('deletar cliente')
        console.log(id)
    }

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name} <Button onClick={() => handleClick(customer.id)}>Deletar o Cliente</Button></li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{paddingLeft: '30px'}} key={`skill-${index}`}>
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
                    {mock.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};

export default App;
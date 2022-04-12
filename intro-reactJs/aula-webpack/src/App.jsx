import React from 'react';

const listCustomer = [
    {
      id: 1,
      name: 'Bruno Carneiro',
      skills: ['React', 'Node', 'CSS', 'Webpack']
    },
    {
      id: 2,
      name: 'Aline Carneiro',
      skills: ['HTML', 'React Native', 'Go', 'JS']
    },
    {
      id: 3,
      name: 'Fulano de Tal',
      skills: ['Assembly']
    },
    {
      id: 4,
      name: 'José Ciclano',
      skills: ['Reason']
    }
  ]
  
  const App = () => {
  
    const handleClick = (e, id) => {
      console.log('deletar cliente')
      alert(`ID do cliente: ${id}`)
    }
  
    const renderCustomers = (customer, index) => {
      return (
        <div key={`customer-${customer.id}`}>
          <li>{customer.name}  <button onClick={(e) => handleClick(e, customer.id)}>Deletar Cliente x</button></li>
          {customer.skills.map(renderSkills)}
        </div>
      )
    }
  
    const renderSkills = (skill, index) => {
      return (
        <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
          <li>{skill}</li>
        </div>
      )
    }
  
    return (
      <div>
        <p>Digital Innovation One</p>
        <p>Bem vindo a nossa aula =D.</p>
        <div>
          <ul>
            {listCustomer.map(renderCustomers)}
          </ul>
        </div>
      </div>
    );
  };




export default App;





//Aula: Listas e Chaves
/* const listCustomer = [
    {
      id: 1,
      name: 'Sirius Black',
      skills: ['Java', 'Node', 'CSS', 'Webpack']
    },
    {
      id: 2,
      name: 'Aline Antunes',
      skills: ['HTML', 'Java', 'CSS', 'JS']
    },
    {
      id: 3,
      name: 'Veronica',
      skills: ['Assembly']
    },
    {
      id: 4,
      name: 'Betty',
      skills: ['Reason']
    }
  ]
  
  const App = () => {
  
    const renderCustomers = (customer, index) => {
      return (
        <div key={`customer-${customer.id}`}>
          <li>{customer.name}</li>
          {customer.skills.map(renderSkills)}
        </div>
      )
    }
  
    const renderSkills = (skill, index) => {
      return (
        <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
          <li>{skill}</li>
        </div>
      )
    }
  
    return (
      <div>
        <p>Digital Innovation One</p>
        <p>Bem vindo a nossa aula =D.</p>
        <div>
          <ul>
            {listCustomer.map(renderCustomers)}
          </ul>
        </div>
      </div>
    );
  };




//Aula sobre Renderização Condicional

/*const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true;

const App = () => {
    const renderShowHistory = () => (
        <div>
         Clique no botão abaixo para visualizar o histórico dos clientes
        <br />
        {buttonA}
        </div>
    )

    const renderAddCustomer = () => (
        <div>
         Clique abaixo para cadastrar o cliente
        <br />
        {buttonB}
        </div>

    )


    const showCustomer = () => {

        if (!hasCustomer) return null

        return (
            <div>
                <h1>Nome do Cliente: Aline Antunes</h1>
            </div>
        )
        }

        console.log('hasCustomer', hasCustomer)

    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem Vindo a nossa aula =D</p>

            {hasCustomer ? renderShowHistory() : renderAddCustomer() }
        <div>
        {showCustomer()}
        </div>
        </div>
    );
};
*/


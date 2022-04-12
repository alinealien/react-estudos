//import React, { Fragment } from "react"
//import Button from "./Button"
//import ComponentA from "./ComponentA"
//import ComponentB from "./ComponentB"
//import React  from "react"
import React, { Component } from "react" //Se for utilizar classe o {Component} é obrigatório
import ReactDOM from "react-dom"
import "./styles.css" //lembrar de importar os componentes, etc..

//Aula I

/*function sum(a, b){
    return a + b
}

function primeiroJSX(){
    return (

        <div className="teste">
          And I know not which I should follow... Shadow or Song 
          <h1>Soma: {sum(10, 20)}</h1>
        </div>
    )
}

const App = () => {

    return (
        <div className="App">
            {primeiroJSX()}
        </div>
    )
}*/

// AULA II - REINDERIZAÇÃO
/*
const element = 'Digital Innovation One'
const element2 = <h1> And I know not which I should follow... Shadow or Song</h1>

function App() {
    return(
    <div className="teste">
        {element}
        {element2}
    </div>
    )
} 

// AULA II - COMPONENTES E PROPS

/* function  soma(a, b) {
    alert(a+b);
    
}

function App() {
    return (
        <div className="App">
            Olá Disgraça, dÊ certo!! 
            <Button onClick={() => soma(10, 20)} name="Aline Antunes" />
        <ComponentA>
            <ComponentB>
                <Button onClick={() => soma(40, 20)} name="Aelin Antunes" />
            </ComponentB>
        </ComponentA>
        </div>
    )
}*/

// AULA - ECOSISTEMAS DO REACTJS

class App extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            clock: 1000,
            copo: 'água'
        }
    }
    
    componentDidMount(){
        window.setTimeout(() => {
            this.setState({
                copo: 'suco'
            })
        }, 3000)
    }

    alterarCopo = () => {
        this.setState({
                copo: 'refrigerante'
            })

        //this.state.copo ='refrigerante'

    }

    render() {
        const { clock, copo } = this.state
        return(
            <div>
                <h1> { clock } </h1>
                <button onClick = {() => this.alterarCopo()}><h1>{copo}</h1></button>
            </div>
        )
    }

}

//rootElement: é onde ele vai reinderizar a aplicação react
const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
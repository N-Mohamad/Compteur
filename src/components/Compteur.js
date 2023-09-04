import { Component } from "react";

class Compteur extends Component {
    constructor(){
        super();
        this.state = {
            compteur: 0,
        };
    }

    increment = () =>{
        this.setState({
            compteur: this.state.compteur + 1,
        })
    }

    decrement = () =>{
        this.setState({
            compteur: this.state.compteur - 1,
        })
    }

    render(){
        return(
            <div>
                <p>{this.state.compteur}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>

            </div>
        )
    }

}

export default Compteur;
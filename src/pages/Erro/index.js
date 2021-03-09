import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Erro extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h2>404 - Página não encontrada</h2>
                <Link to='/'><h3>Voltar para Home</h3></Link> 
            </div>
        );
    }
}

export default Erro;
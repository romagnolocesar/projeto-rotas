import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h2>Bem-vindo a página Home!</h2>
            </div>
        );
    }
}

export default Home
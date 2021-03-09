import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                Header Meu Projeto<br/>
                <Link to='/'>Home </Link>
                <Link to='/sobre'>Sobre </Link>
                <hr/>
            </div>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import './AppHeader.css';


class AppHeader extends Component {

    constructor(){
        super()
        this.state = {
            name: 'David'
        }
    }


    render() {
        return (
            <div className="App-header">Header
                <ul className="navigation">
                    <li>{this.state.name}</li>
                    <li>About</li>
                    <li>Stats</li>
                    <li>Maps</li>
                    <li>Dreams</li>
                </ul>




            
            </div>
        
        );
    }
}

export default AppHeader;
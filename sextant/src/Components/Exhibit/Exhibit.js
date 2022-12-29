import React, { Component } from 'react';
import './Exhibit.css';

class Exhibit extends Component {
    render() {
        return (
            <div className="Exhibit">
                <h2 className="ExhibitHeading">My name is {this.props.name}, Welcome {this.props.heroName} </h2>
                <div className="ExhibitContent">
                    {this.props.children}                    
                </div>
            </div>
        );
    }
}


export default Exhibit;
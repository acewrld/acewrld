import React, { Component } from 'react';
import './App.css';
import Banner from '../src/Components/Banner/Banner';
import Exhibit from '../src/Components/Exhibit/Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="I'm an exhibit!"></Exhibit>
                <Exhibit name="My name is Ademola!"></Exhibit>
                <Exhibit name="Frontend Development Track!"></Exhibit>
            </div>
        );
    }
}

export default App;

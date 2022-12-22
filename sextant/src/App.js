import React, { Component } from 'react';
import './App.css';
import Banner from '../src/Components/Banner/Banner';
import Exhibit from '../src/Components/Exhibit/Exhibit';
import GetIp from './Components/RGetIp';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant App" />
                <div>
                    <Exhibit name="Ademola" heroName="Ace"></Exhibit>
                    <Exhibit track=""></Exhibit>
                    <Exhibit name=""></Exhibit>
                    <GetIp />
                </div>
            </div>
        );
    }
}

export default App;

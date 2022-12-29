import React, { Component } from 'react';
import './App.css';
import Banner from '../src/Components/Banner/Banner';
import Exhibit from '../src/Components/Exhibit/Exhibit';
import PylonWebSocket from './Components/PylonWebSocket';
import IpAddress from './Components/IpAddress';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant App" />
                <div>
                    <Exhibit name="Ademola" heroName="Ace" /> 
                    <Exhibit>
                        <IpAddress />
                    </Exhibit>
                    <Exhibit>
                        <PylonWebSocket />
                    </Exhibit>
                </div>
            </div>
        );
    }
}

export default App;

import React from 'react';
import { YMaps } from 'react-yandex-maps';
import MapContainer from './components/Map';
import Sidebar from './components/Sidebar';
import './App.css';
import './scss/main.scss';

function App() {
  return (
    <YMaps>
    <div className="App infobus">
      <MapContainer />

    </div>
    </YMaps>
    
  );
}

export default App;

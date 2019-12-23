import React, {Component} from 'react';
import { YMaps, Map } from 'react-yandex-maps';


class MapContainer extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} className="infobus__map"/>
            </div>
          );
    }
}
 
export default MapContainer;
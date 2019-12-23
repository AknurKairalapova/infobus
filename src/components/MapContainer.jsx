import React, { Component } from 'react';
import { Map } from 'react-yandex-maps';
import axios from 'axios';
import {DEFAULT_CITY, BASE_API_URL} from '../constants';

class MapContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoadingPoints: false,
      points: [],
      error: null
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    const url = BASE_API_URL + DEFAULT_CITY.id + '/routes/56/busses';
    // this.fetchData(url);
  }

  fetchData(url){
    this.setState({	isLoadingPoints: true	});

    axios.get(url)
      .then(result => {
        this.setState({points: result, isLoadingPoints: false});
      })
      .catch(error => {
        this.setState({error, isLoadingPoints: false});
      });
  }

  render() {
    return (
      <div className="infobus__map-container">
        <Map 
          defaultState={{ center: [51.10, 71.26], zoom: 11 }}
          className="infobus__map" 
        />
      </div>
    );
  }
}

export default MapContainer;

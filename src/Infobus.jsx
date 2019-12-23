import React, { Component } from 'react';
import MapContainer from './components/MapContainer';
import Sidebar from './components/Sidebar';

class Infobus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRoutes: []
    };

    this.handleRouteSelect = this.handleRouteSelect.bind(this);
  }

  handleRouteSelect(item) {
    const selectedRoute = this.state.selectedRoutes.filter((route) => {return route.id === item.id})[0];
    
    if(selectedRoute){
      this.setState({selectedRoutes: this.state.selectedRoutes.filter((route) => {return route.id !== item.id})});
    } else {
      this.setState({selectedRoutes: [...this.state.selectedRoutes, item]});
    }
  }

  render() {
    return (
      <div className="infobus">
        <MapContainer />
        <Sidebar
          selectedRoutes={this.state.selectedRoutes}
          handleRouteSelect={this.handleRouteSelect}
        />
      </div>
    );
  }
}

export default Infobus;

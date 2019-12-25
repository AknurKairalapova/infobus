import React, { Component } from 'react';
import { Map } from 'react-yandex-maps';
import axios from 'axios';
import { DEFAULT_CITY, BASE_API_URL } from '../constants';

class MapContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ymaps: null,
			isLoadingPoints: false,
			points: [],
			error: null,
		};

		this.setYMaps = this.setYMaps.bind(this);
		this.fetchData = this.fetchData.bind(this);
		this.showRoute = this.showRoute.bind(this);
	}

	componentDidMount() {
		const url = BASE_API_URL + DEFAULT_CITY.id + '/routes/56/busses';
		// this.fetchData(url);
	}

	setYMaps(ymaps) {
		this.setState({ ymaps });
	}

	showRoute(ref) {
		if (this.state.ymaps) {
			const mr = this.state.ymaps.multiRouter.MultiRoute;
			const multiRoute = new mr(
				{
					// Описание опорных точек мультимаршрута.
					referencePoints: [
            [55.749, 37.524], 
            'Москва, Успенский пер. 7'
          ],
					// Параметры маршрутизации.
					params: {
						routingMode: 'masstransit',
					},
				},
				{
					// Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
					boundsAutoApply: true,
          // Внешний вид линии маршрута.
          viaPointIconRadius: 7,
        viaPointIconFillColor: "#000088",
        viaPointActiveIconFillColor: "#E63E92",
        
          routeStrokeWidth: 6,
          routeStrokeColor: "#000",
					routeActiveStrokeWidth: 6,
					routeActiveStrokeColor: "#000"
				}
			);
			console.log('multiRoute ', multiRoute);
			ref.geoObjects.add(multiRoute);
			console.log('ref ', ref);
		}
	}

	fetchData(url) {
		this.setState({ isLoadingPoints: true });

		axios
			.get(url)
			.then(result => {
				this.setState({ points: result, isLoadingPoints: false });
			})
			.catch(error => {
				this.setState({ error, isLoadingPoints: false });
			});
	}

	render() {
		return (
			<div className="infobus__map-container">
				<Map
					defaultState={{ center: [55.739625, 37.5412], zoom: 12 }}
					modules={['multiRouter.MultiRoute']}
					className="infobus__map"
					onLoad={ymaps => this.setYMaps(ymaps)}
					instanceRef={ref => ref && this.showRoute(ref)}
				/>
				<button onClick={this.showRoute}>Show route</button>
			</div>
		);
	}
}

export default MapContainer;

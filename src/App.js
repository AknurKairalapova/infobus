import React from 'react';
import { YMaps } from 'react-yandex-maps';
import Infobus from './Infobus';
import './scss/main.scss';

function App() {
	return (
		<YMaps>
			<Infobus />
		</YMaps>
	);
}

export default App;

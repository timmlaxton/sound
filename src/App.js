import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Home from './screens/Home';
import Contact from './screens/Contact';
import AboutScreen from './screens/AboutScreen';
import Equipment from './screens/Equipment';
import Microphones from './screens/Microphones';
import Analogue from './screens/Analogue';
import Console from './screens/Console';
import Foldback from './screens/Foldback';
import MicroPhoneScreen from './screens/MicrophoneScreen';
function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={AboutScreen} />
				<Route path="/booking" exact component={Contact} />
				<Route path="/equipment" exact component={Equipment} />
				<Route path="/microphones" exact component={Microphones} />
				<Route path="/analogue" exact component={Analogue} />
				<Route path="/console" exact component={Console} />
				<Route path="/foldback" exact component={Foldback} />
				<Route path="/product/:id" exact component={MicroPhoneScreen} />
			</Switch>
		</Router>
	);
}

export default App;

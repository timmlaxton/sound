import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Equipment from './screens/Equipment';
import Microphones from './screens/Microphones';
import Analogue from './screens/Analogue';
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/booking" exact component={Contact} />
				<Route path="/equipment" exact component={Equipment} />
				<Route path="/microphones" exact component={Microphones} />
				<Route path="/analogue" exact component={Analogue} />
			</Switch>
		</Router>
	);
}

export default App;

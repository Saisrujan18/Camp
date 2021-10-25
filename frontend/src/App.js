import './App.css';
import { AuthProvider } from './authContext/AuthContext';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import {Login} from "./components/login/Login"
import {AltHome} from "./components/home/AltHome";

import { ProtectedRoute } from './components/ProtectedRoute';

import CollabHome from "./components/collab/CollabHome";
import { Collab } from './components/collab/Collab';

import  Experiences  from './components/experiences/Experiences';
import {SingleExp} from "./components/experiences/SingleExp";

function App() {
  return (
    <AuthProvider>
		<Router>

			<Switch>
				
				<Route exact path={["/login","/"]}><Login /></Route>
				<ProtectedRoute exact path="/home" component={AltHome}/>
				<ProtectedRoute exact path="/collab/:id" component={Collab}/>
				<ProtectedRoute exact path="/collab" component={CollabHome}/>
				<ProtectedRoute exact path="/experiences/:id" component={SingleExp}/>				
				<ProtectedRoute exact path="/experiences" component={Experiences}/>
				
			</Switch>

		</Router>
    </AuthProvider>
  );
}

export default App;

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

import Club from "./components/clubs/Club";
import Sidebar from './components/Sidebar';

function App() {
	
  return (
    <AuthProvider>
		<Router>

			<Switch>
				
				<Route exact path={["/login","/"]}><Login /></Route>
				
				{/* Protected Route checks whether a user is logined or not.
					If user is not logged in ,then we redirect to the login page */}
				
				<ProtectedRoute exact path="/home" component={AltHome}/>
				<ProtectedRoute exact path="/collab/:id" component={Collab}/>
				<ProtectedRoute exact path="/collab" component={CollabHome}/>
				<ProtectedRoute exact path="/experiences/:id" component={SingleExp}/>				
				<ProtectedRoute exact path="/experiences" component={Experiences}/>
				
				<ProtectedRoute exact path="/sports" component={()=>{return Club("sports")}}/>
				<ProtectedRoute exact path="/digitalwizards" component={()=>{return Club("digitalwizards")}}/>
				<ProtectedRoute exact path="/sargam" component={()=>{return Club("sargam")}}/>
				<ProtectedRoute exact path="/techmaniacs" component={()=>{return Club("techmaniacs")}}/>

				{/*Routing to different pages of the webapp is done over here.*/}

			</Switch>

		</Router>
    </AuthProvider>
  );
}

export default App;
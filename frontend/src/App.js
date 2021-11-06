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
import {homepage_anim} from  "./Animations/src/first"

import { ProtectedRoute } from './components/ProtectedRoute';

import CollabHome from "./components/collab/CollabHome";
import { Collab } from './components/collab/Collab';

import  Experiences  from './components/experiences/Experiences';
import {SingleExp} from "./components/experiences/SingleExp";

import Club from "./components/clubs/Club";
import Sidebar from './components/Sidebar';

export const SidebarH = () => <Sidebar />

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
				
				<ProtectedRoute exact path="/Sports" component={()=>{return Club("Sports")}}/>
				<ProtectedRoute exact path="/DigitalWizards" component={()=>{return Club("DigitalWizards")}}/>
				<ProtectedRoute exact path="/Sargam" component={()=>{return Club("Sargam")}}/>
				<ProtectedRoute exact path="/Techmaniacs" component={()=>{return Club("Techmaniacs")}}/>
				<ProtectedRoute exact path="/Testing3D" component={homepage_anim}/>

				{/*Routing to different pages of the webapp is done over here.*/}

			</Switch>

		</Router>
    </AuthProvider>
  );
}

export default App;
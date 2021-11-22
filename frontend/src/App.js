/* eslint-disable no-unused-vars */
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

import {homepage_anim} from  "./Animations/src/third"

import { ProtectedRoute } from './components/ProtectedRoute';

import CollabHome from "./components/collab/CollabHome";
import { Collab } from './components/collab/Collab';

import  Experiences  from './components/experiences/Experiences';
import {SingleExp} from "./components/experiences/SingleExp";

import Club from "./components/clubs/Club";
import Sidebar from './components/Sidebar';
import Profile from './components/profile/Profile';
import AboutUs from './components/aboutUs/AboutUs';

export const SidebarH = (props) => <Sidebar hasEditor={props.hasEditor} handleEditor={props.handleEditor}/>

function App() {
  return (
    <AuthProvider>
		<Router>
			<Switch>
				<Route exact path={["/", "/login"]}><Login /></Route>
				
				{/* Protected Route checks whether a user is logged in or not.
					If user is not logged in ,then we redirect to the login page */}
				
				<ProtectedRoute exact path="/home" component={AltHome}/>

				<ProtectedRoute exact path="/collab/:id" component={Collab}/>
				<ProtectedRoute exact path="/collab" component={CollabHome}/>
				<ProtectedRoute exact path="/experiences/:id" component={SingleExp}/>				
				<ProtectedRoute exact path="/experiences" component={Experiences}/>
				
				<ProtectedRoute exact path="/sports" component={()=>{return <Club name="sports"/>}}/>
				<ProtectedRoute exact path="/digitalwizards" component={()=>{return <Club name="digitalwizards"/>}}/>
				<ProtectedRoute exact path="/sargam" component={()=>{return <Club name="sargam"/>}}/>
				<ProtectedRoute exact path="/techmaniacs" component={()=>{return <Club name="techmaniacs"/>}}/>
				<ProtectedRoute exact path="/Testing3D" component={homepage_anim}/>

				<ProtectedRoute exact path="/profile" component={Profile}/>
				<ProtectedRoute exact path="/aboutUs" component={AboutUs}/>

				{/*Routing to different pages of the webapp is done over here.*/}

			</Switch>

		</Router>
    </AuthProvider>
  );
}

export default App;
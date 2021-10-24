import './App.css';
import { AuthProvider } from './authContext/AuthContext';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import {Login} from "./components/login/Login"
import {Home} from "./components/home/Home";

import { ProtectedRoute } from './components/ProtectedRoute';
import CollabHome from "./components/collab/CollabHome";
import  Experiences  from './components/experiences/Experiences';
import { Collab } from './components/collab/Collab';

function App() {
  return (
    <AuthProvider>
		<Router>

			<Switch>
				
				<Route exact path={["/login","/"]}><Login /></Route>
				<ProtectedRoute exact path="/home" component={Home}/>
				<ProtectedRoute exact path="/collab/:id" component={Collab}/>
				<ProtectedRoute exact path="/collab" component={CollabHome}/>
				<ProtectedRoute exact path="/experiences" component={Experiences}/>
				<ProtectedRoute exact path="/club" component={Home}/>
				
				{/* <ProtectedRoute exact path="/digitalwizards" component={Home}/> */}
			</Switch>

		</Router>
    </AuthProvider>
  );
}

export default App;

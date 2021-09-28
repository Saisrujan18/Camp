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

function App() {
  return (
    <AuthProvider>
		<Router>

			<Switch>
				
				<Route exact path={["/login","/"]}><Login /></Route>
				<ProtectedRoute exact path="/home" component={Home}/>
				<ProtectedRoute exact path="/collab" component={CollabHome}/>
				<ProtectedRoute exact path="/companies" component={Home}/>
				<ProtectedRoute exact path="/club" component={Home}/>
				
				{/* <ProtectedRoute exact path="/digitalwizards" component={Home}/> */}
				
			</Switch>

		</Router>
    </AuthProvider>
  );
}

export default App;

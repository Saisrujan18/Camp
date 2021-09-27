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

import Sidebar from "./components/Sidebar";
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
		<Router>
			<Switch>
				{/* Routes for login, homepage, etc. */}
				<Route exact path={["/login","/"]}>
					<Login />
				</Route>
				
				<ProtectedRoute path="/campcollab">
					<Sidebar/>
				</ProtectedRoute> 

				<ProtectedRoute path="/home">
					<Home/>
				</ProtectedRoute>
			
			</Switch>
		</Router>
    </AuthProvider>
  );
}

export default App;

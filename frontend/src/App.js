import './App.css';
import { AuthProvider } from './authContext/AuthContext';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import {Login} from "./components/login/Login"


function App() {
  return (
    <AuthProvider>
		<Router>
			<Switch>
				{/* Routes for login, homepage, etc. */}
				<Route exact path={["/login","/"]}>
					<Login />
				</Route>
				<Route path="/users">
					<div>Users</div>
				</Route>
			</Switch>
		</Router>
    </AuthProvider>
  );
}

export default App;

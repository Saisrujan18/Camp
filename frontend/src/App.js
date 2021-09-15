import './App.css';
import { AuthProvider } from './authContext/AuthContext';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

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
					<Users />
				</Route>
			</Switch>
		</Router>
    </AuthProvider>
  );
}

export default App;

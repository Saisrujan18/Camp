import React from "react";
import Spinner from "./Spinner";
import { Route,Redirect } from "react-router";
import { useAuth } from "../authContext/AuthContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {

    let { user, loading, setUserData } = useAuth();
    let Comp = (props) => {
        if (loading)
        return <Spinner/>
        else
        {
            const userData = localStorage.getItem("userData");
            if( userData ){
                setUserData(userData);
            }
            // Check for invalid domain
            return user?(user.email.endsWith("@iittp.ac.in")?<Component {...props}/>:<Redirect to="/login"/>):<Redirect to="/login"/>;
        }
    }

    return (
        <Route {...rest} render={ (props)=>{return Comp(props);}}/>
    );
}
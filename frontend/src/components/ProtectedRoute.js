import React from "react";
import Spinner from "./Spinner";
import { Route,Redirect } from "react-router";
import { useAuth } from "../authContext/AuthContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {

    let { user, loading } = useAuth();

    let Comp = (props) => {
        if (loading)
            return <Spinner/>
        else
            return user?<Component {...props}/>:<Redirect to="/login"/>;
    }

    return (
        <Route {...rest} render={ (props)=>{return Comp(props);}}/>
    );
}
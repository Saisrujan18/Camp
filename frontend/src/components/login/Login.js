import React from 'react';
import { useState } from 'react';
import "./Login.css";

import fire from "../login/assets/Camp.png";
import bg from "../login/assets/BG.png"
import { useAuth } from '../../authContext/AuthContext';
import { useHistory } from 'react-router';
import Spinner from '../Spinner';

const styles = 
{
   body: "body flex flex-row rounded-lg text-blac bg-whit",
    login_menu: "login-menu bg-whit rounded-l-lg flex-1",
    login_body: "login-body rounded-l h-full",
    logo: "logo my-14 mx-auto flex items-center gap-x-2",
    login_header: "login-header my-5 mx-auto text-xl font-semibold",
    login_button: "login-button flex items-center my-2 mx-auto bg-blue-500 text-gray-50 px-10 py-2 login-btn",
    login_image: "login-image hidden md:block md:flex-2 lg:flex-3 bg-whit  rounded-r-lg",
    logofont:"subpixel-antialiased font-bold text-2xl" 
}

export function Login() 
{
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const {auth, signInWithGoogle} = useAuth();
    const history = useHistory();
    
    // let the user login using google Auth
    // take him to another page and check for the email there
    // then navigate to appropriate page if email doesnot belong to any organisation.

    const handleLogin = async () => {
        try{
            setLoading(true);
            await signInWithGoogle(); 
            console.log(auth.currentUser.email);
            history.push("/home");
        }
        catch(e){
            setLoading(false);
            setError(e.message);
        }
    }
    
    return (
        <div className={styles.body}>
            
            <div className={styles.login_menu}>

                <div className={styles.login_body}>

                    <div className={styles.logo}>
                        <img src={fire} className="w-9" alt="Not found"></img>
                        <div className={styles.logofont}>Camp</div>
                    </div>

                    
                    <div className={styles.login_header}>Login To Your Account</div>
                    
                    <button disabled = {loading} className={styles.login_button} onClick={handleLogin}>
                        {loading && <Spinner />}
                        Log in with Google
                    </button>
                    {error && <div className="text-sm mx-auto text-red-600">{error}</div>}
                </div>
            
            </div>
            
            <div className={styles.login_image}>
                <img src={bg}  className="max-w-full max-h-full bg-contain imagee" alt="no"></img>
            </div>
        </div>
    )
}
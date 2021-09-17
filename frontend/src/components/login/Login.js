import React from 'react';
import { useState } from 'react';
import "./Login.css";

import fire from "../login/assets/Camp.png";
import bg from "../login/assets/BG.png"
import { useAuth } from '../../authContext/AuthContext';
import { useHistory } from 'react-router';

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

const fonts = {
    header_font: "text-xl font-semibold"
}




export function Login() 
{
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const {user, signInWithGoogle} = useAuth();
    const history = useHistory();
    // let the user login using google Auth
    // take him to another page and check for the email there
    // then navigate to appropriate page if email doesnot belong to any organisation.
    const handleLogin = async () => {
        try{
            setLoading(true);
            await signInWithGoogle(); 
            console.log(user.email);
            setLoading(false);
            history.push("/home");
        }
        catch(e){
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

function Spinner() {
    return (
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  }
import React from 'react';
import fire from "../../components/Camp.png";
import colors from "../../colors";
import "./Login.css";

const styles = 
{
    body: "body flex flex-row",
    login_menu: "login-menu bg-darkOrange flex-1",
    // bg-gray-600
    login_body: "login-body h-full",
    logo: "logo my-14 mx-auto",
    login_header: "login-header my-5 mx-auto",
    login_button: "login-button my-2 mx-auto bg-blue-500 text-gray-50 px-10 py-2",
    login_image: "login-image hidden md:block md:flex-2 lg:flex-3"
}

export function Login() 
{
    return (
        <div className={styles.body}>
            
            <div className={styles.login_menu}>

                <div className={styles.login_body}>
                    <div className={styles.logo}>
                        {/* <img src={fire} alt="Not found"></img> */}
                        <div>Camp</div>
                    </div>

                    
                    <div className={styles.login_header}>Login To Your Account</div>
                    
                    <button className={styles.login_button} onClick={() => console.log("clicked")}>
                        GoogleInput
                    </button>
                </div>
            
            </div>
            
            <div className={styles.login_image}>image</div>
        </div>
    )
}

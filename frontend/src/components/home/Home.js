/* eslint-disable no-unused-vars */

import React from 'react';
import { useState } from 'react';
import "../login/Login.css";

import { useAuth } from '../../authContext/AuthContext';

import fire from "../login/assets/Camp.png";
import bg from "../login/assets/BG.png"

const styles = 
{
   body: "body flex flex-row rounded-lg text-blac bg-whit",
    login_menu: "login-menu bg-whit rounded-l-lg flex-1 flex flex-col",
    login_body: "login-body rounded-l h-full",
    logo: "logo my-14 mx-auto flex items-center gap-x-2",
    login_header: "login-header my-5 mx-auto text-xl font-semibold self-center",
    login_button: "login-button flex items-center my-2 mx-auto bg-blue-500 text-gray-50 px-10 py-2 login-btn",
    login_image: "login-image hidden md:block md:flex-2 lg:flex-3 bg-whit  rounded-r-lg",
    logofont:"subpixel-antialiased font-bold text-2xl" 
}

export function Home() 
{
    const {user}=useAuth();
    return (
        <div className={styles.body}>
            
            <div className={styles.login_menu}>

                <div className={styles.login_body}>

                    <div className={styles.logo}>
                        <img src={fire} className="w-9" alt="Not found"></img>
                        <div className={styles.logofont}>Camp</div>
                    </div>

                    
                    <div className={styles.login_header}> {"Welcome to Camp "+user.email}</div>
                </div>
            
            </div>
            
            <div className={styles.login_image}>
                <img src={bg}  className="max-w-full max-h-full bg-contain imagee" alt="no"></img>
            </div>
        </div>
    )
}
import React from "react";
import { useState } from "react";
import "./Login.css";
import fire from "../login/assets/Camp.png";
import bg from "../login/assets/BG.png";
import { useAuth } from "../../authContext/AuthContext";
import { useHistory } from "react-router";
import Spinner from "../Spinner";
import axios from "axios";
import TextField from "@mui/material/TextField";

// styles object to reduce the inline css content
const styles = {
  body: "body flex flex-row rounded-lg text-blac",
  login_menu:
    "login-menu bg-whit justify-around rounded-lg flex-1 small_l:rounded-l-lg",
  login_body: "login-body flex flex-col rounded-l h-full",
  logo: "logo my-14 mx-auto flex items-center gap-x-2",
  login_header: "login-header my-5 mx-auto text-xl font-semibold",
  login_button:
    "login-button flex items-center my-2 mx-auto bg-blue-500 rounded text-gray-50 px-10 py-2 transition duration-700 ease-in-out transform hover:scale-105 hover:shadow-glow_sb2",
  login_image:
    "login-image items-center overflow-hidden h-auto hidden medium_l:block medium_l:w-3/4 large:w-5/7 rounded-r-lg",
  logofont: "subpixel-antialiased font-bold text-2xl",
};

export function Login() {

  // Variables required are defined here
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [noUsername, setNoUsername] = useState(false);
  const [username, setUsername] = useState("");
  const { auth, signInWithGoogle, setUserData } = useAuth();
  const history = useHistory();

  // let the user login using google Auth
  // take him to another page and check for the email there
  // then navigate to appropriate page if email doesnot belong to any organisation.

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();

      // insert into the collection..
      axios
        .post("/api/user", { email: auth.currentUser.email })
        .then((res) => {
          setLoading(false);
          if (res.data == "nousername") {
            setNoUsername(true);
          } else {
            history.push("/home");
          }
        })
        .catch((err) => console.log(err));
    } catch (event) {
      setLoading(false);
      setError(event.message);
    }
  };

  const handleNewUserLogin = () => {
    setLoading(true);
    axios.post("/api/user/newuser", {email: auth.currentUser.email, username: username})
    .then(res => {setLoading(false); history.push("/home")})
  }

  // renders the Login Page with a simple login button
  return (
    <div className={styles.body}>
      <div className={styles.login_menu}>
        <div className={styles.login_body}>
          <div className={styles.logo}>
            <img src={fire} className="w-9" alt="Not found"></img>
            <div className={styles.logofont}>Camp</div>
          </div>
          <div className={styles.login_header}>Login To Your Account</div>
          {!noUsername?
          <>
          <button
            disabled={loading}
            className={styles.login_button}
            onClick={handleLogin}
          >
            {loading && <Spinner />}
            Log in with Google
          </button>
          {error?<div className="text-sm mx-auto text-red-600">{error}</div>:""}
          </>
          :
          <div className="mx-auto"><TextField
            className="p-4 w-60"
            id="outlined-basic"
            label="Username"
            InputProps ={{ disableUnderline: true }}
            variant="filled"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          {/* Shows spinner symbolizing the loading process */}
          <button
            disabled={loading}
            className={styles.login_button}
            onClick={handleNewUserLogin}
          >
            {loading && <Spinner />}
            Login
          </button>
          </div>
          }
        </div>
      </div>
      <div className={styles.login_image}>
        <img
          src={bg}
          className="image w-full h-full bg-contain transition duration-500 ease-in-out transform hover:scale-105"
          alt="no"
        ></img>
      </div>
    </div>
  );
}

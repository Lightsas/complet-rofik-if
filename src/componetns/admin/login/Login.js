import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: {pathname: "/"}};

    if (!firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }


    const handleGoogleSingIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          var credential = result.credential;
          var token = credential.accessToken;
          const {displayName, email} = result.user;
          const singedInUser = {name: displayName, email};
          setLoggedInUser(singedInUser);
          history.replace(from);
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });

    }

    return (
        <div className="d-flex justify-content-center d-flex align-items-center">
            <div className="google-btn ">
            <div className="google-icon-wrapper">
                <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            </div>
            <p onClick={handleGoogleSingIn} class="btn-text"><b>Sign in with google</b></p>
            </div>
          </div>
    );
};

export default Login;
import React from "react";
import { Redirect } from "react-router-dom";


const LoginPage = ({ isLoggedIn, onLogin }) => {

    if (isLoggedIn) {
        return <Redirect to="/" />
    }

    return(
        <div className="jumbotron">
            <p>Log in please!</p>
            <button
                className="btn btn-outline-primary"
                onClick={onLogin}>
                Login
            </button>
        </div>
    )
}

export default LoginPage;

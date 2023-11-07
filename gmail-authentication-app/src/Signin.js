// SignIn.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const SignIn = () => {
    const responseGoogle = (response) => {
        if (response && response.profileObj) {
            // Handle the successful authentication response here
            console.log(response.profileObj);
            // Redirect to the welcome page or do any other necessary actions
        }
    };

    return (
        <div>
            <h1>Sign in using Gmail</h1>
            <GoogleLogin
                clientId="888142542078-u1nbjvi9shtse20m1dr0npudv9jdrd1o.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default Signin;

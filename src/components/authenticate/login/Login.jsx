import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import '../authenticate.css';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, signInWithGoogle, signInWithFb } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function startLogin() {
        setError('');
        setLoading(true);
    }

    function redirectToDashboard() {
        history.push('/');
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            startLogin();
            await login(emailRef.current.value, passwordRef.current.value);
            redirectToDashboard();
        } catch {
            setError('Failed to log in');
        }
        setLoading(false);
    }

    async function signInFb(e) {
        e.preventDefault();

        try {
            startLogin();
            await signInWithFb();
            redirectToDashboard();
            history.push('/');
        } catch {
            setError('Failed to log in');
        }
        setLoading(false);
    }

    async function signInGoogle(e) {
        e.preventDefault();

        try {
            startLogin();
            await signInWithGoogle();
            redirectToDashboard();
        } catch {
            setError('Failed to log in');
        }
        setLoading(false);
    }

    return (
        <div className="container">
            <div className="row">
                <h2 className="center-text">Login</h2>
                <div className="vl">
                    <span className="vl-innertext">or</span>
                </div>
                {error && <div>{error}</div>}
                <div className="col">
                    <a
                        href="#"
                        className="fb btn center-text"
                        onClick={signInFb}
                    >
                        <FontAwesomeIcon icon={icons['faFacebookF']} />
                        <span>Login with Facebook</span>
                    </a>
                    <a href="#" className="twitter btn center-text">
                        <FontAwesomeIcon icon={icons['faTwitter']} />
                        <span>Login with Twitter</span>
                    </a>
                    <a
                        href="#"
                        className="google btn center-text"
                        onClick={signInGoogle}
                    >
                        <FontAwesomeIcon icon={icons['faGoogle']} />
                        <span>Login with Google</span>
                    </a>
                </div>
                <div className="col">
                    <div className="hide-md-lg">
                        <p>Or sign in manually:</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder="Email"
                            type="email"
                            ref={emailRef}
                            required
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            ref={passwordRef}
                            required
                        />
                        <input disabled={loading} type="submit" value="Login" />
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link className="btn center-text" to="/web/signup">
                        Sign up
                    </Link>
                </div>
                <div className="col">
                    <Link className="btn center-text" to="/web/forgot-password">
                        Forgot Password?
                    </Link>
                </div>
            </div>
        </div>
    );
}

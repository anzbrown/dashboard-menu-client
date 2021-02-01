import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/auth/AuthContext';
import { useLoading } from '../../../contexts/loader/LoaderContext';
import '../authenticate.css';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, signInWithGoogle, signInWithFb } = useAuth();
    const { loading, setLoading } = useLoading();
    const [error, setError] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            switch (e.currentTarget.id) {
                case 'fb':
                    await signInWithFb();
                    break;
                case 'google':
                    await signInWithGoogle();
                    break;
                case 'twitter':
                    break;
                default:
                    await login(
                        emailRef.current.value,
                        passwordRef.current.value
                    );
                    break;
            }
            history.push('/');
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
                        id="fb"
                        className="fb btn center-text"
                        onClick={handleLogin}
                    >
                        <FontAwesomeIcon icon={icons['faFacebookF']} />
                        <span>Login with Facebook</span>
                    </a>
                    <a
                        href="#"
                        id="twitter"
                        className="twitter btn center-text"
                    >
                        <FontAwesomeIcon icon={icons['faTwitter']} />
                        <span>Login with Twitter</span>
                    </a>
                    <a
                        href="#"
                        id="google"
                        className="google btn center-text"
                        onClick={handleLogin}
                    >
                        <FontAwesomeIcon icon={icons['faGoogle']} />
                        <span>Login with Google</span>
                    </a>
                </div>
                <div className="col">
                    <div className="hide-md-lg">
                        <p>Or sign in manually:</p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <input
                            placeholder="Email"
                            type="email"
                            ref={emailRef}
                            required
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            autoComplete="true"
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

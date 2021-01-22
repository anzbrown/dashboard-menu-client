import React, { useRef, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import '../authenticate.css';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
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
                    <a href="#" className="fb btn">
                        <FontAwesomeIcon icon={icons['faFacebookF']} />
                        Login with Facebook
                    </a>
                    <a href="#" className="twitter btn">
                        <FontAwesomeIcon icon={icons['faTwitter']} />
                        Login with Twitter
                    </a>
                    <a href="#" className="google btn">
                        <FontAwesomeIcon icon={icons['faGoogle']} />
                        Login with Google
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
            <div className="bottom-container">
                <div className="row">
                    <div className="col">
                        <Link className="btn" to="/web/signup">
                            Sign up
                        </Link>
                    </div>
                    <div className="col">
                        <Link className="btn" to="/web/forgot-password">
                            Forgot Password?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

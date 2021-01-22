import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

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
        <div>
            <h2>Login</h2>
            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div id="email">
                    <label>Email</label>
                    <input type="email" ref={emailRef} required />
                </div>
                <div id="password">
                    <label>Password</label>
                    <input type="password" ref={passwordRef} required />
                </div>
                <button disabled={loading} type="submit">
                    Login
                </button>
            </form>
            <div>
                <Link to="/web/forgot-password">Forgot Password?</Link>
            </div>
            <div>
                Need an account? <Link to="/web/signup">Sign up</Link>
            </div>
        </div>
    );
}

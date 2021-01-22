import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setMessage('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions');
        } catch {
            setError('Failed to reset password');
        }
        setLoading(false);
    }

    return (
        <div>
            <h2>Reset Password</h2>
            {error && <div>{error}</div>}
            {message && <div>{message}</div>}
            <form onSubmit={handleSubmit}>
                <div id="email">
                    <label>Email</label>
                    <input type="email" ref={emailRef} required />
                </div>
                <button disabled={loading} type="submit">
                    Reset Password
                </button>
            </form>
            <div>
                <Link to="/web/login">Login</Link>
            </div>
            <div>
                Need an account? <Link to="/web/signup">Sign up</Link>
            </div>
        </div>
    );
}

import React, { useRef, useState } from 'react';
import { useAuth } from '../../../contexts/auth/AuthContext';
import { Link } from 'react-router-dom';
import { useLoading } from '../../../contexts/loader/LoaderContext';

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const { loading, setLoading } = useLoading();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

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
        <div className="container">
            <div className="row">
                <h2 className="center-text">Reset Password</h2>
                <div className="vl">
                    <span className="vl-innertext">or</span>
                </div>
                {error && <div>{error}</div>}
                {message && <div>{message}</div>}
                <div className="col">
                    <div>
                        <Link className="btn center-text" to="/web/signup">
                            Sign up
                        </Link>
                        <Link className="btn center-text" to="/web/login">
                            Login
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            autoComplete="true"
                            placeholder="Email"
                            required
                        />
                        <input
                            disabled={loading}
                            type="submit"
                            value="Reset Password"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

import React, { useRef, useState } from 'react';
import { useAuth } from '../../../contexts/auth/AuthContext';
import { useLoading } from '../../../contexts/loader/LoaderContext';
import { Link, useHistory } from 'react-router-dom';

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const { loading, setLoading } = useLoading();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch {
            setError('Failed to create an account');
        }
        setLoading(false);
    }

    return (
        <div className="container">
            <div className="row">
                <h2 className="center-text">Sign Up</h2>
                <div className="vl">
                    <span className="vl-innertext">or</span>
                </div>
                {error && <div>{error}</div>}
                <div className="col">
                    <div>
                        <p className="center-text">Already have an account?</p>
                        <Link className="btn center-text" to="/web/login">
                            Login
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            ref={emailRef}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            ref={passwordRef}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            ref={passwordConfirmRef}
                            required
                        />
                        <input
                            disabled={loading}
                            type="submit"
                            value="Sign Up"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

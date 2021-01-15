import React, { useEffect, useReducer } from 'react';
import { initialState, reducer } from './reducer';
import { getContent } from './helper';
import './Main.css';

export default function Main() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getContent(dispatch);
    }, []);

    return (
        <main>
            <h1>Snowflake</h1>
            {state.content.map((para, index) => (
                <p key={index}>{para}</p>
            ))}
        </main>
    );
}

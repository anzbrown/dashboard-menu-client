import React, { useEffect } from 'react';
import { getInitialTheme } from './helper';
import Sidebar from './components/side-bar/Sidebar';
import Main from './components/main/Main';
import './Themes.css';
import './App.css';

export default function App() {
    useEffect(() => getInitialTheme(), []);

    return (
        <>
            <Sidebar />
            <Main />
        </>
    );
}

import React, { useEffect, useState } from 'react';
import Sidebar from './components/side-bar/Sidebar';
import Main from './components/main/Main';
import './Themes.css';
import './App.css';

export default function App() {
    const [darkTheme, setDarkTheme] = useState(true);

    useEffect(() => (document.documentElement.classList = 'dark-theme'), []);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
        document.documentElement.classList = !darkTheme
            ? 'dark-theme'
            : 'light-theme';
    };

    return (
        <>
            <Sidebar toggleTheme={toggleTheme} />
            <Main />
        </>
    );
}

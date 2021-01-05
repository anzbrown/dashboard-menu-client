import React, { useState } from 'react';
import Sidebar from './components/side-bar/Sidebar';
import Main from './components/main/Main';
import './Themes.css';
import './App.css';

export default function App() {
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => setDarkTheme(!darkTheme);

    return (
        <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
            <Sidebar toggleTheme={toggleTheme} />
            <Main />
        </div>
    );
}

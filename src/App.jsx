import React, { useState } from 'react';
import Sidebar from './components/side-bar/Sidebar';
import Main from './components/main/Main';
import './App.css';
import './Themes.css';

export default function App() {
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => setDarkTheme(!darkTheme);

    return (
        <div className={darkTheme ? 'theme-dark' : 'theme-light'}>
            <button onClick={() => toggleTheme()}>click me</button>
            <Sidebar themeToggle={toggleTheme} />
            <Main />
        </div>
    );
}

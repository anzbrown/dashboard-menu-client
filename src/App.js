import React from 'react';
import Sidebar from './components/Sidebar/index';
import Main from './components/main/index';
import './App.css';

export default function App() {
    return (
        <div className="App">
            <Sidebar />
            <Main />
        </div>
    );
}

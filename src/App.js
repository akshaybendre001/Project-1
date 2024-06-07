// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Photos from './pages/Photos';
import Users from './pages/Users';
import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/photos" component={Photos} />
                    <Route path="/users" component={Users} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;

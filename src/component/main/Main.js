import React, { Component } from 'react';
import {BrowserRouter as Router,  Route, HashRouter } from "react-router-dom";
import Dashboard from '../dashboard/Dashboard';
class Main extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Route path="/" exact={true} strict={true} component={Dashboard} />
                    <Route path="/near-by-me" exact={true} strict={true} component={Dashboard} />
                </HashRouter>
            </div>
        );
    }
}

export default Main;
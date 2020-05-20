import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../header/Header'
import Dashboard from '../dashboard/Dashboard';
import NearByMe from '../nearBySupport/NearByMe'
import Footer from '../footer/Footer'
class Main extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/" exact={true} component={Dashboard} />
                        <Route path="/near-by-me" exact={true} component={NearByMe} />
                    </Switch>
                    <Footer />
                </Router>
            </div>

        );
    }
}

export default Main;
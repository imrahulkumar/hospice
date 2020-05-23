import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../header/Header'
import Dashboard from '../dashboard/Dashboard';
import NearByHospital from '../nearByHospital/NearByHospital'
import Footer from '../footer/Footer'
import NearSupport from '../nearSupport/NearSupport';
import Faq from '../faq/Faq'
class Main extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/" exact={true} component={Dashboard} />
                        <Route path="/near-by-me" exact={true} component={NearByHospital} />
                        <Route path="/near/:id" exact={true} component={NearSupport}/>
                        <Route path="/faq"  component={Faq}/>
                        <Route path="/faq/:id"  component={Faq}/>
                    </Switch>
                    <Footer />
                </Router>
            </div>

        );
    }
}

export default Main;
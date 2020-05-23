import React, { Component } from 'react'
import General from '../general/General'
import { BrowserRouter as Router, Route, NavLink, Switch,Link } from 'react-router-dom'
import Symptoms from '../symptoms/Symptoms'
import Medical from '../medical/Medical'
import Protection from '../protection/Protection'

export default class Faq extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <section className="faq-section bg-f9 padding-tb">
                    <div className="container">
                        <div className="section-header wow fadeInUp" data-wow-delay="0.3s">
                            <span>FAQ Of The Coronavirus-</span>
                            <h2>Frequently Asked Questions</h2>
                        </div>
                        <div className="section-wrapper wow fadeInUp" data-wow-delay="0.4s">
                            <ul className="tab-lists lab-ul nav justify-content-center" id="myTab" role="tablist">
                                <li className="nav-item tab-list">
                                    <Link to={`${this.props.match.path}/general`}  aria-controls="general" aria-selected="true">General</Link>
                                </li>
                                <li className="nav-item tab-list">
                                    <Link  to={`${this.props.match.path}/symptoms`}   aria-controls="symptoms" aria-selected="false">Symptoms</Link>
                                </li>
                                <li className="nav-item tab-list">
                                    <Link  to={`${this.props.match.path}/medical`}   aria-controls="medical" aria-selected="false">Medical</Link>
                                </li>
                                <li className="nav-item tab-list">
                                    <Link  to={`${this.props.match.path}/protection`} aria-controls="protection" aria-selected="false">Protection</Link>
                                </li>
                            </ul>
                            <div className="tab-content faq-content"  >                    
                              
                                <Route  path={`${this.props.match.path}/general`} exact={true} component={General}/>
                                <Route  path={`${this.props.match.path}/symptoms`} exact={true} component={Symptoms}/>
                                <Route  path={`${this.props.match.path}/medical`} exact={true} component={Medical}/>
                                <Route  path={`${this.props.match.path}/protection`} exact={true} component={Protection}/>
                    
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

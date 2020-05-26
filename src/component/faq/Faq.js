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
      const  objPath ={
          'general':General,
          'symptoms':Symptoms,
          'medical':Medical,
          'protection':Protection,
      }
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
                                    <Link to={{pathname: `${this.props.match.path}/general`, query: 'general' }}  aria-controls="general" aria-selected="true">General</Link>
                                    </li>
                                <li className="nav-item tab-list">
                                    <Link  to={{pathname: `${this.props.match.path}/symptoms`, query: 'symptoms' }}  aria-controls="symptoms" aria-selected="false">Symptoms</Link>
                                </li>
                                <li className="nav-item tab-list">
                                    <Link  to={{pathname: `${this.props.match.path}/medical`, query: 'medical' }}   aria-controls="medical" aria-selected="false">Medical</Link>
                                </li>
                                <li className="nav-item tab-list">
                                    <Link  to={{pathname: `${this.props.match.path}/protection`, query: 'protection' }}  aria-controls="protection" aria-selected="false">Protection</Link>
                                </li>
                            </ul>
                            <div className="tab-content faq-content"  >  
                               <Route path={`${this.props.match.path}/:id`} component={objPath[this.props.location.query]}/> 
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

import React, { Component } from 'react';
import Axios from "axios";

class NearByHospital extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hospital: []
        }
    }
    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition((position) => {
                const key = "AIzaSyAoDJ4s8Sf-IdZrNNK58PTeTpmSr7KYAjw"
                this.getHospitalNearByLatLong(position.coords.latitude, position.coords.longitude, key);
            });
        }
    }

    getHospitalNearByLatLong = async (lat, long, key) => {
        const res = await Axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1500&type=hospital&key=${key}`);
        let listOfHospital = JSON.parse(res.request.responseText);
       
        this.setState({
            hospital: listOfHospital.results
        })
    };



    render() {
        const sectionStyle = {
            backgroundImage: "url('assets/css/bg-image/service-bg.jpg')"
        }


        const linkToHospital = (anchor) => {
            return <div>
                <p>Open In Map:</p>  <div className="linkStyle" dangerouslySetInnerHTML={{ __html: anchor }}></div>
            </div>
        }

        const listOfHospital = this.state.hospital.map((d, index) => {
            return (
                <div className="col-md-6 col-12 wow fadeInUp" key={index} data-wow-delay={`0.${index}s`}>
                    <div className="service-item style-2">
                        <div className="service-inner">
                            <div className="service-thumb">
                                <img src={d.icon} alt="service"></img>
                            </div>
                            <div className="service-content">
                                <h4>{d.name}</h4>
                                <p>{d.vicinity}</p>

                                {(d && d.photos && d.photos.length > 0 && d.photos[0].html_attributions.length > 0 ? linkToHospital(d.photos[0].html_attributions[0]) : '')}

                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div>
                <section className="service-section home-3 padding-tb" style={sectionStyle} id="symptoms">
                    <div className="container">
                        <div className="section-header wow fadeInUp" data-wow-delay="0.3s">
                            <h2>Corona Virus Symptoms</h2>
                            <p> Dynamically formulate fully tested catalysts for change via focused methods of empowerment Assertively extend alternative synergy and extensive web services.</p>
                        </div>
                        <div className="section-wrapper">
                            <div className="row no-gutters justify-content-center">
                                {listOfHospital}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default NearByHospital;
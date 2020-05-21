import React, { Component } from 'react';
import CircleDesign from '../card/CircleDesign'
import Axios from "axios";
class NearSupport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    getHospitalNearByLatLong = async (lat, long, key, type) => {
        debugger
        const res = await Axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1500&type=${type}&key=${key}`);
        let list = JSON.parse(res.request.responseText);
        console.log(list.results)
        this.setState({
            list: list.results
        })
    };

    getLatLong = (type) => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition((position) => {
                const key = "AIzaSyAoDJ4s8Sf-IdZrNNK58PTeTpmSr7KYAjw"
                this.getHospitalNearByLatLong(position.coords.latitude, position.coords.longitude, key, type);
            });
        }
    }

    componentDidMount() {
        let typeOfPage = this.props.match.params['id'];
        if (typeOfPage === 'blood-bank') {
            this.getLatLong('blood');
        }
        else if (typeOfPage === 'testing-laboratory') {
            this.getLatLong('testing-laboratory');
        }
        else if (typeOfPage === 'chemist-outlet') {
            this.getLatLong('pharmacy');
        }
        else if (typeOfPage === 'police-station') {
            this.getLatLong('police');
        }
    }

    render() {
        return (
            <CircleDesign tile={this.state.list} />
        );
    }
}
export default NearSupport;
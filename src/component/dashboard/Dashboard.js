import React, { Component } from 'react';
import CardBox from '../card/CardBox';
import Axios from "axios";
import StateCovidTableList from '../table/StateCovidTableList';  

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            covidApiResponse: [],
            globalCases: [],
            img: [
                "assets/images/corona/01.png",
                "assets/images/corona/02.png",
                "assets/images/corona/03.png",
                "assets/images/corona/01.png",
                "assets/images/corona/02.png",
                "assets/images/corona/03.png",
            ],
            covidIndiaStateList:[],
            covidIndiaTotalCaseList:{}
        };
    }
    componentDidMount() {
        this.GetCovidCasesList();
        this.GetIndiaStateCovidList();
    }
    GetCovidCasesList = async () => {
        const res = await Axios.get(`https://api.covid19api.com/summary`);
        this.setState({ ...res, covidApiResponse: res });
        this.setState({ ...res, globalCases: res.data.Global });
    };
    GetIndiaStateCovidList = async () => { 
        const statesResult = await Axios.get(`https://api.rootnet.in/covid19-in/stats/latest`);
        console.log("statesResult", statesResult.data.data); 
        this.setState({ ...statesResult, covidIndiaStateList: statesResult.data.data.regional }); 
        this.setState({ ...statesResult, covidIndiaTotalCaseList: statesResult.data.data.summary}); 
        
    };

    render() {
            const globalCaseCardList = Object.entries(this.state.globalCases).map((e, index) => ({
            case: e[0],
            count: e[1],
            image: this.state.img[index]
        }));

       

        return (
            <div> 

                {/* Banner Section start here   */}
                <section className="banner-section home-4">
                    <div className="banner-area">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-6 col-12">
                                    <div className="content-part">
                                        <div className="banner-content">
                                            <h2><span>HOSPICE</span></h2>
                                            <p>Growing with You  <span>Everyday</span></p>
                                            <p>Hospice care prioritizes comfort and quality of life by reducing pain and suffering.</p>
                                            <a href="index-4.html#" className="lab-btn style-2"><span>finad a doctor</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="banner-round">
                                        <img src="assets/images/banner/home-4/01.png" alt="banner"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Banner Section ending here  */}

                {/* corona count section start here  */}
                <section className="corona-count-section home-4 bg-corona padding-tb pt-0">
                    <div className="container">
                        <div className="corona-wrap">
                            <div className="corona-count-top wow fadeInUp" data-wow-delay="0.3s">

                                {/* Common Card for case list Section start here  */}
                                <CardBox covidCaseList={globalCaseCardList} />
                                {/* Common Card for case list Section end here  */}

                            </div>
                            <div className="corona-count-bottom wow fadeInUp" data-wow-delay="0.4s">
                                <div className="row justify-content-center">
                                    <div className="col-xl-12 col-lg-12 col-12"> 
                                        <StateCovidTableList covidStatelist={this.state.covidIndiaStateList} covidIndiaTotalCaseList={this.state.covidIndiaTotalCaseList} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* corona count section ending here  */}

                {/* Service Section Start Here  */}
                <section className="service-section home-4 pt-0 bg-f9 padding-tb">
                    <div className="container">
                        <div className="section-header wow fadeInUp" data-wow-delay="0.3s"> 
                            <h2>Our Service</h2>
                        </div>
                        <div className="section-wrapper">
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="service-item text-center">
                                        <div className="service-inner">
                                            <div className="service-thumb">
                                                <img src="assets/images/service/home-4/01.jpg" alt="service"></img>
                                            </div>
                                            <div className="service-content">
                                                <h4>Hospital</h4>
                                                <p>Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="service-item text-center">
                                        <div className="service-inner">
                                            <div className="service-thumb">
                                                <img src="assets/images/service/home-4/02.jpg" alt="service"></img>
                                            </div>
                                            <div className="service-content">
                                                <h4>Blood Bank</h4>
                                                <p>Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="service-item text-center">
                                        <div className="service-inner">
                                            <div className="service-thumb">
                                                <img src="assets/images/service/home-4/03.jpg" alt="service"></img>
                                            </div>
                                            <div className="service-content">
                                                <h4>Testing Laboratory</h4>
                                                <p>Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                            <div className="col-xl-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item text-center">
                                    <div className="service-inner">
                                        <div className="service-thumb">
                                            <img src="assets/images/service/home-4/01.jpg" alt="service"></img>
                                        </div>
                                        <div className="service-content">
                                            <h4>Chemist Outlet</h4>
                                            <p>Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="service-item text-center">
                                    <div className="service-inner">
                                        <div className="service-thumb">
                                            <img src="assets/images/service/home-4/02.jpg" alt="service"></img>
                                        </div>
                                        <div className="service-content">
                                            <h4>Police Station</h4>
                                            <p>Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* Service Section Ending Here  */}

                {/* Service Section Start Here  */}
                <section className="service-section home-4 bg-f6 padding-tb">
                    <div className="home-4-shape">
                        <div className="shape">
                            <img src="assets/images/banner/home-4/home-4-shape.png" alt="service-shape"></img>
                        </div>
                    </div>
                    <div className="container">
                        <div className="section-header wow fadeInUp" data-wow-delay="0.3s">
                            <span>About Coronavirus</span>
                            <h2>Coronavirus Symptroms</h2>
                        </div>
                        <div className="section-wrapper">
                            <div className="row no-gutters justify-content-center align-items-center">
                                <div className="col-lg-4 wow fadeInLeft" data-wow-delay="0.3s">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="service-item style-2">
                                                <div className="service-inner">
                                                    <div className="service-thumb">
                                                        <img src="assets/images/service/home-4/04.jpg" alt="service"></img>
                                                    </div>
                                                    <div className="service-content">
                                                        <h5>Coughing And Sneezing</h5>
                                                        <p>Our company Online Markeing strateg boost your</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="service-item style-2">
                                                <div className="service-inner">
                                                    <div className="service-thumb">
                                                        <img src="assets/images/service/home-4/05.jpg" alt="service"></img>
                                                    </div>
                                                    <div className="service-content">
                                                        <h5>Shortness Of Breath</h5>
                                                        <p>Our company Online Markeing strateg boost your</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="service-item style-2">
                                                <div className="service-inner">
                                                    <div className="service-thumb">
                                                        <img src="assets/images/service/home-4/06.jpg" alt="service"></img>
                                                    </div>
                                                    <div className="service-content">
                                                        <h5>Confusion</h5>
                                                        <p>Our company Online Markeing strateg boost your</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="sert-thumb">
                                        <img src="assets/images/service/home-4/01.png" alt="service"></img>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInRight" data-wow-delay="0.3s">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="service-item style-2">
                                                <div className="service-inner">
                                                    <div className="service-thumb">
                                                        <img src="assets/images/service/home-4/07.jpg" alt="service"></img>
                                                    </div>
                                                    <div className="service-content">
                                                        <h5>Hot Fever</h5>
                                                        <p>Our company Online Markeing strateg boost your</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="service-item style-2">
                                                <div className="service-inner">
                                                    <div className="service-thumb">
                                                        <img src="assets/images/service/home-4/08.jpg" alt="service"></img>
                                                    </div>
                                                    <div className="service-content">
                                                        <h5>Strong Headacke</h5>
                                                        <p>Our company Online Markeing strateg boost your</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="service-item style-2">
                                                <div className="service-inner">
                                                    <div className="service-thumb">
                                                        <img src="assets/images/service/home-4/09.jpg" alt="service"></img>
                                                    </div>
                                                    <div className="service-content">
                                                        <h5>Sore Throat</h5>
                                                        <p>Our company Online Markeing strateg boost your</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Service Section Ending Here  */}

                {/* timeline section start here  */}
                <section className="timeline-section padding-tb">
                    <div className="container">
                        <div className="section-header wow fadeInUp" data-wow-delay="0.3s">
                            <span>Timeline</span>
                            <h2>Coronavirus A Timeline</h2>
                        </div>
                        <div className="section-wrapper wow fadeInUp" data-wow-delay="0.4s">
                            <div className="timeline-list line-1">
                                <div className="timeline-shape timeline-shape1">
                                    <img src="assets/images/timeline/01.png" alt="timeline-shape"></img>
                                </div>
                                <div className="row justify-content-center no-gutters">
                                    <div className="col-xl-3 col-sm-6 col-12">
                                        <div className="timeline-item text-center">
                                            <div className="top-round">
                                                <span className="pluse_1"></span><span className="pluse_2"></span>
                                            </div>
                                            <div className="timeline-content">
                                                <h6>Dec 31</h6>
                                                <p>China alerts who to several pneumonia cases</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 col-12">
                                        <div className="timeline-item text-center">
                                            <div className="top-round">
                                                <span className="pluse_1"></span><span className="pluse_2"></span>
                                            </div>
                                            <div className="timeline-content">
                                                <h6>JAN 07</h6>
                                                <p>France confirms europe's first case</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 col-12">
                                        <div className="timeline-item text-center">
                                            <div className="top-round">
                                                <span className="pluse_1"></span><span className="pluse_2"></span>
                                            </div>
                                            <div className="timeline-content">
                                                <h6>JAN 11</h6>
                                                <p>China announces first death</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 col-12">
                                        <div className="timeline-item text-center">
                                            <div className="top-round">
                                                <span className="pluse_1"></span><span className="pluse_2"></span>
                                            </div>
                                            <div className="timeline-content">
                                                <h6>JAN 13</h6>
                                                <p>Who reports care in thailand the first outside china</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-list line-2">
                                <div className="timeline-shape timeline-shape2">
                                    <img src="assets/images/timeline/02.png" alt="timeline-shape"></img>
                                </div>
                                <div className="timeline-shape timeline-shape3">
                                    <img src="assets/images/timeline/02.png" alt="timeline-shape"></img>
                                </div>
                                <div className="row justify-content-center no-gutters">
                                    <div className="col-xl-3 col-sm-6 col-12">
                                        <div className="timeline-item text-center">
                                            <div className="top-round">
                                                <span className="pluse_1"></span><span className="pluse_2"></span>
                                            </div>
                                            <div className="timeline-content">
                                                <h6>FEB 07</h6>
                                                <p>Chinese doctor & whistleblower li wenliang dies</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 col-12">
                                        <div className="timeline-item text-center">
                                            <div className="top-round">
                                                <span className="pluse_1"></span><span className="pluse_2"></span>
                                            </div>
                                            <div className="timeline-content">
                                                <h6>FEB 02</h6>
                                                <p>First death outside china recorded in the philippines</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 col-12">
                                        <div className="timeline-item text-center">
                                            <div className="top-round">
                                                <span className="pluse_1"></span><span className="pluse_2"></span>
                                            </div>
                                            <div className="timeline-content">
                                                <h6>JAN 30</h6>
                                                <p>Who declares outbreak a global health emergency</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-list line-3">
                                <div className="timeline-shape timeline-shape4">
                                    <img src="assets/images/timeline/01.png" alt="timeline-shape"></img>
                                </div>
                                <div className="timeline-shape timeline-shape5">
                                    <img src="assets/images/timeline/01.png" alt="timeline-shape"></img>
                                </div>
                                <div className="row justify-content-center no-gutters">
                                    <div className="col-xl-3 col-sm-6 col-12">
                                        <div className="timeline-item text-center">
                                            <div className="top-round">
                                                <span className="pluse_1"></span><span className="pluse_2"></span>
                                            </div>
                                            <div className="timeline-content">
                                                <h6>FEB 11</h6>
                                                <p>Who names virus COVID-19</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 col-12">
                                        <div className="timeline-item text-center">
                                            <div className="top-round">
                                                <span className="pluse_1"></span><span className="pluse_2"></span>
                                            </div>
                                            <div className="timeline-content">
                                                <h6>FEB 14</h6>
                                                <p>Egypt confirms africa's first case</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* timeline section ending here  */}

                {/* Service Section Start Here  */}
                <section className="service-section home-4 style-2 bg-f6 p-rel padding-tb">
                    <div className="home-4-shape">
                        <div className="shape">
                            <img src="assets/images/banner/home-4/home-4-shape.png" alt="service-shape"></img>
                        </div>
                    </div>
                    <div className="container">
                        <div className="section-header wow fadeInUp" data-wow-delay="0.3s">
                            <span>Should Do And Should Avoid</span>
                            <h2>Prevention Coronavirus Covid-19</h2>
                        </div>
                        <div className="section-wrapper">
                            <div className="row no-gutters">
                                <div className="col-md-6 col-12 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="service-left">
                                        <h3>What you should do</h3>
                                        <div className="row no-gutters justify-content-center">
                                            <div className="col-12">
                                                <div className="service-item style-2">
                                                    <div className="service-inner">
                                                        <div className="service-thumb">
                                                            <img src="assets/images/service/home-3/01.jpg" alt="service"></img>
                                                        </div>
                                                        <div className="service-content">
                                                            <h4>Wash your hands sanitizer</h4>
                                                            <p>Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="service-item style-2">
                                                    <div className="service-inner">
                                                        <div className="service-thumb">
                                                            <img src="assets/images/service/home-3/02.jpg" alt="service"></img>
                                                        </div>
                                                        <div className="service-content">
                                                            <h4>Ware a face mask outside</h4>
                                                            <p>Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="service-item style-2">
                                                    <div className="service-inner">
                                                        <div className="service-thumb">
                                                            <img src="assets/images/service/home-3/03.jpg" alt="service"></img>
                                                        </div>
                                                        <div className="service-content">
                                                            <h4>Cover your cough tissue paper</h4>
                                                            <p>Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="service-item style-2">
                                                    <div className="service-inner">
                                                        <div className="service-thumb">
                                                            <img src="assets/images/service/home-3/04.jpg" alt="service"></img>
                                                        </div>
                                                        <div className="service-content">
                                                            <h4>Check your body regulerly</h4>
                                                            <p>Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="service-right">
                                        <h3>What you should avoid</h3>
                                        <div className="row no-gutters justify-content-center">
                                            <div className="col-12">
                                                <div className="service-item style-2">
                                                    <div className="service-inner">
                                                        <div className="service-thumb">
                                                            <img src="assets/images/service/home-3/05.jpg" alt="service"></img>
                                                        </div>
                                                        <div className="service-content">
                                                            <h4>Avoid contact with sick people</h4>
                                                            <p>Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="service-item style-2">
                                                    <div className="service-inner">
                                                        <div className="service-thumb">
                                                            <img src="assets/images/service/home-3/06.jpg" alt="service"></img>
                                                        </div>
                                                        <div className="service-content">
                                                            <h4>Avoid contact animals</h4>
                                                            <p>Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="service-item style-2">
                                                    <div className="service-inner">
                                                        <div className="service-thumb">
                                                            <img src="assets/images/service/home-3/07.jpg" alt="service"></img>
                                                        </div>
                                                        <div className="service-content">
                                                            <h4>Avoid crowded places</h4>
                                                            <p>Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="service-item style-2">
                                                    <div className="service-inner">
                                                        <div className="service-thumb">
                                                            <img src="assets/images/service/home-3/08.jpg" alt="service"></img>
                                                        </div>
                                                        <div className="service-content">
                                                            <h4>Contaminated objects</h4>
                                                            <p>Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Service Section Ending Here  */}

                {/* faq section start here  */}
                <section className="faq-section bg-f9 padding-tb">
                    <div className="container">
                        <div className="section-header wow fadeInUp" data-wow-delay="0.3s">
                            <span>FAQ Of The Coronavirus-</span>
                            <h2>Frequently Asked Questions</h2>
                        </div>
                        <div className="section-wrapper wow fadeInUp" data-wow-delay="0.4s">
                            <ul className="tab-lists lab-ul nav justify-content-center" id="myTab" role="tablist">
                                <li className="nav-item tab-list">
                                    <a className="active" id="general-tab" data-toggle="tab" href="index-4.html#general" role="tab" aria-controls="general" aria-selected="true">General</a>
                                </li>
                                <li className="nav-item tab-list">
                                    <a id="symptoms-tab" data-toggle="tab" href="index-4.html#symptoms" role="tab" aria-controls="symptoms" aria-selected="false">Symptoms</a>
                                </li>
                                <li className="nav-item tab-list">
                                    <a id="medical-tab" data-toggle="tab" href="index-4.html#medical" role="tab" aria-controls="medical" aria-selected="false">Medical</a>
                                </li>
                                <li className="nav-item tab-list">
                                    <a id="protection-tab" data-toggle="tab" href="index-4.html#protection" role="tab" aria-controls="protection" aria-selected="false">Protection</a>
                                </li>
                                <li className="nav-item tab-list">
                                    <a id="travel-tab" data-toggle="tab" href="index-4.html#travel" role="tab" aria-controls="travel" aria-selected="false">Travel</a>
                                </li>
                            </ul>
                            <div className="tab-content faq-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-6 col-sm-8 col-12">
                                            <ul className="accordion lab-ul">
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>What are the objectives of this Website?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>What is the best features and services we deiver?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Why this Prevention important to me?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>how may I take part in and purchase this?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>What kinds of security policy do you maintain?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-sm-8 col-12">
                                            <ul className="accordion lab-ul">
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Get things done with this beautiful app?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Starting with Aviki is easier than anything?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>20k+ Customers Love Aviki App?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Whatever Work You Do You Can Do It In Aviki?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Download our guide manage your daily works?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="symptoms" role="tabpanel" aria-labelledby="symptoms-tab">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-6 col-sm-8 col-12">
                                            <ul className="accordion lab-ul">
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>What is the best features and services we deiver?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Why this Prevention important to me?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>how may I take part in and purchase this?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>What kinds of security policy do you maintain?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-sm-8 col-12">
                                            <ul className="accordion lab-ul">
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Starting with Aviki is easier than anything?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>20k+ Customers Love Aviki App?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Whatever Work You Do You Can Do It In Aviki?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Download our guide manage your daily works?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="medical" role="tabpanel" aria-labelledby="medical-tab">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-6 col-sm-8 col-12">
                                            <ul className="accordion lab-ul">
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Why this Prevention important to me?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>how may I take part in and purchase this?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>What kinds of security policy do you maintain?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-sm-8 col-12">
                                            <ul className="accordion lab-ul">
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>20k+ Customers Love Aviki App?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Whatever Work You Do You Can Do It In Aviki?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Download our guide manage your daily works?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="protection" role="tabpanel" aria-labelledby="protection-tab">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-6 col-sm-8 col-12">
                                            <ul className="accordion lab-ul">
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>What are the objectives of this Website?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>What is the best features and services we deiver?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Why this Prevention important to me?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>how may I take part in and purchase this?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>What kinds of security policy do you maintain?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-sm-8 col-12">
                                            <ul className="accordion lab-ul">
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Get things done with this beautiful app?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Starting with Aviki is easier than anything?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>20k+ Customers Love Aviki App?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Whatever Work You Do You Can Do It In Aviki?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Download our guide manage your daily works?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="travel" role="tabpanel" aria-labelledby="travel-tab">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-6 col-sm-8 col-12">
                                            <ul className="accordion lab-ul">
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>What is the best features and services we deiver?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Why this Prevention important to me?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>how may I take part in and purchase this?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>What kinds of security policy do you maintain?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-sm-8 col-12">
                                            <ul className="accordion lab-ul">
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Starting with Aviki is easier than anything?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>20k+ Customers Love Aviki App?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Whatever Work You Do You Can Do It In Aviki?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                                <li className="accordion-item">
                                                    <div className="accordion-list">
                                                        <div className="left">
                                                            <div className="icon"><i className="icofont-info"></i></div>
                                                        </div>
                                                        <div className="right">
                                                            <h6>Download our guide manage your daily works?</h6>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-answer">
                                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertatis et quasi archtecto beatae vitae dicta sunt explicab Nemo enim ipsam voluptatem quia voluptas.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* faq section ending here  */}

                {/* Blog Section Start Here  */}
                <section className="blog-section home-3 bg-f6 padding-tb">
                    <div className="home-4-shape">
                        <div className="shape">
                            <img src="assets/images/banner/home-4/home-4-shape.png" alt="service-shape"></img>
                        </div>
                    </div>
                    <div className="container">
                        <div className="section-header wow fadeInUp" data-wow-delay="0.3s">
                            <h2>Our Most Popular Blog</h2>
                            <p> Dynamically formulate fully tested catalysts for change via focused methods of empowerment Assertively extend alternative synergy and extensive web services.</p>
                        </div>
                        <div className="section-wrapper">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="post-item">
                                        <div className="post-item-inner">
                                            <div className="post-thumb">
                                                <a href="index-4.html#"><img src="assets/images/blog/01.jpg" alt="lab-blog"></img></a>
                                            </div>
                                            <div className="post-content">
                                                <h5><a href="index-4.html#">Conulting Reporting Qouncil Arei
											Not Could More...</a></h5>
                                                <div className="author-date">
                                                    <a href="index-4.html#" className="date"><i className="icofont-calendar"></i>July 12, 2020</a>
                                                    <a href="index-4.html#" className="admin"><i className="icofont-ui-user"></i>Somrat Islam</a>
                                                </div>
                                                <p>Pluoresntly customize pranci an plcentered  customer service anding strategic amerials Interacvely cordinate performe</p>
                                                <div className="post-footer">
                                                    <a href="index-4.html#" className="text-btn">Read More<i className="icofont-double-right"></i></a>
                                                    <a href="index-4.html#" className="comments"><i className="icofont-comment"></i><span>2</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="post-item">
                                        <div className="post-item-inner">
                                            <div className="post-thumb">
                                                <a href="index-4.html#"><img src="assets/images/blog/02.jpg" alt="lab-blog"></img></a>
                                            </div>
                                            <div className="post-content">
                                                <h5><a href="index-4.html#">Financial Reporting Qouncil What Could More...</a></h5>
                                                <div className="author-date">
                                                    <a href="index-4.html#" className="date"><i className="icofont-calendar"></i>July 12, 2020</a>
                                                    <a href="index-4.html#" className="admin"><i className="icofont-ui-user"></i>Somrat Islam</a>
                                                </div>
                                                <p>Pluoresntly customize pranci an plcentered  customer service anding strategic amerials Interacvely cordinate performe</p>
                                                <div className="post-footer">
                                                    <a href="index-4.html#" className="text-btn">Read More<i className="icofont-double-right"></i></a>
                                                    <a href="index-4.html#" className="comments"><i className="icofont-comment"></i><span>2</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="post-item">
                                        <div className="post-item-inner">
                                            <div className="post-thumb">
                                                <a href="index-4.html#"><img src="assets/images/blog/03.jpg" alt="lab-blog"></img></a>
                                            </div>
                                            <div className="post-content">
                                                <h5><a href="index-4.html#">Consulting Reporting Qounc Arei Could More...</a></h5>
                                                <div className="author-date">
                                                    <a href="index-4.html#" className="date"><i className="icofont-calendar"></i>July 12, 2020</a>
                                                    <a href="index-4.html#" className="admin"><i className="icofont-ui-user"></i>Somrat Islam</a>
                                                </div>
                                                <p>Pluoresntly customize pranci an plcentered  customer service anding strategic amerials Interacvely cordinate performe</p>
                                                <div className="post-footer">
                                                    <a href="index-4.html#" className="text-btn">Read More<i className="icofont-double-right"></i></a>
                                                    <a href="index-4.html#" className="comments"><i className="icofont-comment"></i><span>2</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* < Blog Section Ending Here  */}

                {/* Sponsor Section Start Here  */}
                <div className="sponsor-section">
                    <div className="container">
                        <div className="section-wrapper wow fadeInUp" data-wow-delay="0.3s">
                            <div className="sponsor-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="sponsor-item">
                                            <div className="sponsor-thumb">
                                                <a href="index-4.html#"><img src="assets/images/sponsor/01.png" alt="lab-sponsor"></img></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="sponsor-item">
                                            <div className="sponsor-thumb">
                                                <a href="index-4.html#"><img src="http://demos.codexcoder.com/labartisan/html/covid-19/assets/images/sponsor/02.png" alt="lab-sponsor"></img></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="sponsor-item">
                                            <div className="sponsor-thumb">
                                                <a href="index-4.html#"><img src="assets/images/sponsor/03.png" alt="lab-sponsor"></img></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="sponsor-item">
                                            <div className="sponsor-thumb">
                                                <a href="index-4.html#"><img src="assets/images/sponsor/04.png" alt="lab-sponsor"></img></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="sponsor-item">
                                            <div className="sponsor-thumb">
                                                <a href="index-4.html#"><img src="assets/images/sponsor/05.png" alt="lab-sponsor"></img></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="sponsor-item">
                                            <div className="sponsor-thumb">
                                                <a href="index-4.html#"><img src="assets/images/sponsor/06.png" alt="lab-sponsor"></img></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sponsor Section Ending Here  */}
            </div>
        );
    }
}

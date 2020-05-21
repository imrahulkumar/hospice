import React from 'react'

const CircleDesign = (props) => {


    const linkTo = (anchor) => {
        return <div>
            <p>Open In Map:</p>  <div className="linkStyle" dangerouslySetInnerHTML={{ __html: anchor }}></div>
        </div>
    }


    const tile = props.tile.map((d, index) => {
        return (
            <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" key={index} data-wow-delay={`0.${index}s`}>
                <div className="service-item text-center">
                    <div className="service-inner">
                        <div className="service-thumb">
                            <img src={d.icon} alt="service"></img>
                        </div>
                        <div className="service-content">
                            <h5>{d.name}</h5>
                            <p>{d.vicinity}</p>
                            {(d && d.photos && d.photos.length > 0 && d.photos[0].html_attributions.length > 0 ? linkTo(d.photos[0].html_attributions[0]): '')}
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <section className="service-section bg-f9 home-2 padding-tb">
                <div className="container">
                    <div className="section-header wow fadeInUp" data-wow-delay="0.3s">
                        <span>Sky is nothing but graveyard of stars.</span>
                        <h2>Stay Safe From The Coronavirus.</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row justify-content-center">
                            {tile}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default CircleDesign
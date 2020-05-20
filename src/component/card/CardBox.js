import React from 'react'


const CardBox = (props) => {
    const covidCaseResult = props.covidCaseList.map((c, index) => {
        return (
            <div className="col-xl-2 col-md-6 col-12" key={index}>
                <div className="corona-item">
                    <div className="corona-inner" key={Math.floor(Math.random() * 10)}>
                        <div className="corona-thumb">
                            <img src={`${c.image}`} alt="card" />
                        </div>
                        <div className="corona-content">
                            <h3 className="count-number">{c.count}</h3>
                            <p>{c.case}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="row justify-content-center align-items-center">
            {covidCaseResult}
        </div>
    )
}

export default CardBox



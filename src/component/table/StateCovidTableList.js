import React from 'react';
const StateCovidTableList = (props)=> { 
    const wrapper = {
        padding: '0px', 
      };

    console.log("StateCovidTableList prop",props); 
        const covidStateCaseResult = props.covidStatelist.map((c, index)=>{
            return (
                 <tr key={index}>
                    <td>{c.loc}</td> 
                     <td className="new-cases">{c.totalConfirmed}</td>
                     <td>{c.discharged}</td>
                     <td className="new-deaths">{c.deaths}</td>
                     <td>{c.confirmedCasesIndian}</td>
                     <td>{c.confirmedCasesForeign}</td>
                </tr>
            )
        });
    return (
        <div className="corona-left" style={wrapper}>
        <table className="table table-striped table-bordered caseTablePadding">
        <thead>
            <tr>
                <th>State</th>
                <th>Confirmed Cases</th>  
                <th>Discharge Cases</th> 
                <th>Death Cases</th> 
                <th>Confirmed Indian Cases</th> 
                <th>Confirmed Foreign Cases</th>
            </tr>
        </thead>
        <tbody>
           {covidStateCaseResult}
        </tbody>
        <tfoot>
            <tr>
                <th>Total</th>
                <th>{props.covidIndiaTotalCaseList.total}</th>
                <th>{props.covidIndiaTotalCaseList.discharged}</th>
                <th>{props.covidIndiaTotalCaseList.deaths}</th>
                <th>{props.covidIndiaTotalCaseList.confirmedCasesIndian}</th>
                <th>{props.covidIndiaTotalCaseList.confirmedCasesForeign}</th> 
            </tr>
        </tfoot>
      </table>
        </div>
    )
}

export default StateCovidTableList

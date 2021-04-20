import React from 'react';

const CaseStudyDetails = ({caseStudyData}) => {
    return (
        <div className="col-md-4 mt-5">
          <img style={{height: "270px"}} src={caseStudyData.image}></img>
            <div className="card" style={{width: "23rem", alignItems: "center"}}>
            <div class="card-body">
                <h5 class="card-title">{caseStudyData.title}</h5>
                <h6 class="card-text">{caseStudyData.name}</h6>
            </div>
            </div>

        </div>
    );
};

export default CaseStudyDetails;
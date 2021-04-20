import React, { useState } from 'react';
import CaseStudyDetails from '../casstudydetails/CaseStudyDetails';

const CaseStudy = () => {
    const [casestudy, setCasestudy] = useState([]);
    const caseStudyData = [
        {
            image: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg",
            title: 'Data Security',
            name: 'Web Solutions'
        },
        {
            image: 'https://oxidian.hr/wp-content/uploads/2020/04/heroimg.png',
            title: 'Career Frustation',
            name: 'Software Solutions'
        },
        {
            image: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg',
            title: 'Data Security',
            name: 'Data Analytics'
        },
    ]
    return (
        <div className="container mt-5 m-auto">
            <div className="row d-flex align-content-center flex-wrap">
                <h5 style={{textAlign: 'center'}}>// CASE STUDY //</h5>
                <h1 className="mt-3"  style={{textAlign: 'center'}}>Our Portfolio/Works</h1>
                {
                    caseStudyData.map(caseStudyData => <CaseStudyDetails caseStudyData={caseStudyData}></CaseStudyDetails>)
                }
                
            </div>
        </div>
    );
};

export default CaseStudy;
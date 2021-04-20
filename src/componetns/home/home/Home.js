import React from 'react';
import About from '../about/About';
import CaseStudy from '../casestudy/CaseStudy';
import Footter from '../../sharecomponet/footer/Footter';
import Header from '../header/Header';
import Services from '../service/Services';
import ShowReviewData from '../showreviewdata/ShowReviewData';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <About></About>
            <ShowReviewData></ShowReviewData>
            <CaseStudy></CaseStudy>
            <Footter></Footter>
        </div>
    );
};

export default Home;
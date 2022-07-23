import React, { Component } from 'react';
import HomeHeader from '../component/homepage/HomeHeader/homeHeader';
import HowDoesItWord from '../component/homepage/HowDoesItWork/howDoesItWork';
import FAQ from '../component/homepage/FAQ/faq';
import Organization from '../component/homepage/Organization/organization';

class HomePage extends Component {
    
    render() { 
        return (
            <div>
                <HomeHeader></HomeHeader>
                <HowDoesItWord></HowDoesItWord>
                <FAQ></FAQ>
                <Organization></Organization>
            </div>
        );
    }
}
 
export default HomePage;
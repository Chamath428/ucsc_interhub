import React, { Component } from 'react';
import HomeNavBar from '../component/homepage/HomeNavBar/homeNavBar';
import HomeHeader from '../component/homepage/HomeHeader/homeHeader';
import HowDoesItWord from '../component/homepage/HowDoesItWork/howDoesItWork';
import FAQ from '../component/homepage/FAQ/faq';
import Organization from '../component/homepage/Organization/organization';
import Partners from '../component/homepage/Partners/partners';
import ContactUs from '../component/homepage/ContactUs/contactUs';
import Footer from '../component/homepage/Footer/footer';

class HomePage extends Component {
    
    render() { 
        return (
            <div>
                <HomeNavBar></HomeNavBar>
                <HomeHeader></HomeHeader>
                <HowDoesItWord></HowDoesItWord>
                <FAQ></FAQ>
                <Organization></Organization>
                <Partners></Partners>
                <ContactUs></ContactUs>
                <Footer></Footer>
            </div>
        );
    }
}
 
export default HomePage;
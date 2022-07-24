import React, { Component,useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination,Autoplay,Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./partnersStyles.css";

// import required modules

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Company1 from '../../../assets/images/company1.png';
import Company2 from '../../../assets/images/company2.png';
import Company3 from '../../../assets/images/company3.png';
import Company4 from '../../../assets/images/company4.png';
import Company5 from '../../../assets/images/company5.png';
import Company6 from '../../../assets/images/company6.png';



class Partners extends Component {

    render() { 
        return (
                <>
                <Container className="mb-5">
                    <Row>
                        <Col lg="10" className="mx-auto text-center">
                            <h1>Trusted Organization</h1>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={140}
                            freeMode={true}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                            modules={[FreeMode, Pagination,Autoplay,Navigation]}
                            className="mySwiper mt-5"
                        >
                            <SwiperSlide><img src={Company1} style={{width:'100px', height:'30px'}}/></SwiperSlide>
                            <SwiperSlide><img src={Company2} style={{width:'100px', height:'30px'}}/></SwiperSlide>
                            <SwiperSlide><img src={Company3} style={{width:'100px', height:'30px'}}/></SwiperSlide>
                            <SwiperSlide><img src={Company4} style={{width:'100px', height:'30px'}}/></SwiperSlide>
                            <SwiperSlide><img src={Company5} style={{width:'100px', height:'30px'}}/></SwiperSlide>
                            <SwiperSlide><img src={Company6} style={{width:'100px', height:'30px'}}/></SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </>
           );
    }
}
 
export default Partners;
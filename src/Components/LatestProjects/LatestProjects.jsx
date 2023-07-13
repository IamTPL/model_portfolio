import React from 'react';
import './LatestProjectsStyle.css';
import imgCover from '../../assets/imgs/imgCoverProjects.png';
import Slider from 'react-slick';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import imgLatest1 from '../../assets/imgs/tab8/tab8.1.jpg';
import imgLatest3 from '../../assets/imgs/latetest/white2.jpg';
import imgLatest4 from '../../assets/imgs/tab8/tab8.5.jpg';
import imgLatest5 from '../../assets/imgs/tab8/tab8.8.jpg';
import imgLatest6 from '../../assets/imgs/latetest/gray1.png';
import imgLatest7 from '../../assets/imgs/latetest/gray2.png';

const LatestProjects = () => {
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="slick-arrow slick-prev"
                onClick={onClick}
                style={{
                    fontSize: '40px',
                    color: '#000',
                    transform: 'translateX(-10px)',
                }}
            >
                <i className="fas fa-angle-left"></i>
            </div>
        );
    };

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="slick-arrow slick-next"
                onClick={onClick}
                style={{ fontSize: '40px', color: '#000' }}
            >
                <i className="fas fa-angle-right"></i>
            </div>
        );
    };

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        lazyLoad: false,
        draggable: false,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const itemStyle = {
        margin: '0 10px',
    };

    return (
        <div className="latest_project pt-20 lg:pt-10 sm:pt-5 w-screen max-w-[1495px] mx-auto">
            <img
                src={imgCover}
                alt="cover image"
                className="w-full h-[450px] md:h-[300px] xs:h-[240px] object-cover object-top"
                id="projects"
            />

            <div className="mx-[80px] lg:mx-[60px] md:mx-[40px] xs:mx-5 relative bg-[#d3d3d3] pb-16">
                <div className="absolute top-0 left-0 right-0 px-[110px] lg:px-[60px] md:px-[50px] xs:px-5 translate-y-[-50%] z-10">
                    <div className="bg-black h-[290px] md:h-[240px] sm:h-[180px]">
                        <h2 className="pt-10 text-white text-6xl md:text-5xl sm:text-3xl xs:text-2xl text-center">
                            <span className="font-bold">LATEST</span>{' '}
                            <span className="font-extralight">PROJECTS</span>
                        </h2>
                    </div>
                </div>

                <div className="relative pt-10 md:pt-5 px-[150px] md:px-24 xs:px-10 z-20">
                    <Slider {...settings}>
                        <div>
                            <div style={itemStyle}>
                                <a href={imgLatest1} data-fancybox="projects">
                                    <img
                                        src={imgLatest1}
                                        alt=""
                                        className="w-full h-[350px] object-cover"
                                        onClick={() => {
                                            Fancybox.bind(
                                                '[data-fancybox="projects"]',
                                                {}
                                            );
                                        }}
                                    />
                                </a>
                            </div>
                        </div>

                        <div>
                            <div style={itemStyle}>
                                <a href={imgLatest7} data-fancybox="projects">
                                    <img
                                        src={imgLatest7}
                                        alt=""
                                        className="w-full h-[350px] object-cover"
                                        onClick={() => {
                                            Fancybox.bind(
                                                '[data-fancybox="projects"]',
                                                {}
                                            );
                                        }}
                                    />
                                </a>
                            </div>
                        </div>

                        <div>
                            <div style={itemStyle}>
                                <a href={imgLatest4} data-fancybox="projects">
                                    <img
                                        src={imgLatest4}
                                        alt=""
                                        className="w-full h-[350px] object-cover"
                                        onClick={() => {
                                            Fancybox.bind(
                                                '[data-fancybox="projects"]',
                                                {}
                                            );
                                        }}
                                    />
                                </a>
                            </div>
                        </div>

                        <div>
                            <div style={itemStyle}>
                                <a href={imgLatest3} data-fancybox="projects">
                                    <img
                                        src={imgLatest3}
                                        alt=""
                                        className="w-full h-[350px] object-cover"
                                        onClick={() => {
                                            Fancybox.bind(
                                                '[data-fancybox="projects"]',
                                                {}
                                            );
                                        }}
                                    />
                                </a>
                            </div>
                        </div>

                        <div>
                            <div style={itemStyle}>
                                <a href={imgLatest5} data-fancybox="projects">
                                    <img
                                        src={imgLatest5}
                                        alt=""
                                        className="w-full h-[350px] object-cover"
                                        onClick={() => {
                                            Fancybox.bind(
                                                '[data-fancybox="projects"]',
                                                {}
                                            );
                                        }}
                                    />
                                </a>
                            </div>
                        </div>

                        <div>
                            <div style={itemStyle}>
                                <a href={imgLatest6} data-fancybox="projects">
                                    <img
                                        src={imgLatest6}
                                        alt=""
                                        className="w-full h-[350px] object-cover"
                                        onClick={() => {
                                            Fancybox.bind(
                                                '[data-fancybox="projects"]',
                                                {}
                                            );
                                        }}
                                    />
                                </a>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default LatestProjects;

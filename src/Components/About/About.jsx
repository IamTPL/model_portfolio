import React from 'react';
import './AboutStyle.css';
import img5 from '../../assets/imgs/tab11/tab11.5.JPG';
import img3 from '../../assets/imgs/img3.PNG';
import img6 from '../../assets/imgs/img6.PNG';
import img7 from '../../assets/imgs/img7.jpg';
import img8 from '../../assets/imgs/about4.jpg';

const About = () => {
    return (
        <div
            className="about relative my-20 xxl:max-w-[1280px] xl:max-w-[1080px] lg:max-w-[850px] md:max-w-[740px] mx-auto flex sm:flex-col"
            id="about"
        >
            <div className="about_left flex-1 pr-20 lg:pr-10 md:pr-0">
                <img
                    src={img5}
                    alt="image"
                    className="sm:mx-auto h-[700px] lg:h-[550px] md:h-[480px] w-full md:w-[350px] object-cover object-center"
                />
            </div>

            <div className="about_right relative flex-1">
                <div className="measurement">
                    <h1 className="my-5 text-3xl font-medium text-center">
                        MEASUREMENTS
                    </h1>
                    <div className="flex sm:justify-center xs:text-sm">
                        <div className="measure_item flex flex-col">
                            <span>HEIGHT</span>
                            <span className="text-[#cb997e] font-medium text-sm xs:text-xs">
                                1m60
                            </span>
                        </div>
                        <div className="measure_item flex flex-col">
                            <span>EYES</span>
                            <span className="text-[#cb997e] font-medium text-sm xs:text-xs">
                                Black
                            </span>
                        </div>
                        <div className="measure_item flex flex-col">
                            <span>HAIR</span>
                            <span className="text-[#cb997e] font-medium text-sm xs:text-xs">
                                Brown
                            </span>
                        </div>
                        <div className="measure_item flex flex-col">
                            <span>BUST</span>
                            <span className="text-[#cb997e] font-medium text-sm xs:text-xs">
                                82 cm
                            </span>
                        </div>
                        <div className="measure_item flex flex-col">
                            <span>WAIST</span>
                            <span className="text-[#cb997e] font-medium text-sm xs:text-xs">
                                59 cm
                            </span>
                        </div>
                        <div className="measure_item flex flex-col">
                            <span>HIPS</span>
                            <span className="text-[#cb997e] font-medium text-sm xs:text-xs">
                                89 cm
                            </span>
                        </div>
                        <div className="measure_item flex flex-col">
                            <span>SHOE</span>
                            <span className="text-[#cb997e] font-medium text-sm xs:text-xs">
                                38 (EU)
                            </span>
                        </div>
                    </div>
                </div>

                <div className="absolute sm:relative sm:px-10 xs:px-4 bottom-10 lg:bottom-40 md:bottom-20 sm:bottom-[-20px] ">
                    <div className="flex space-x-3">
                        <a
                            href="https://www.instagram.com/nglyuri/?fbclid=IwAR1Ljq83ivMqzYjnQwaCRRb-ZqdF54ct_aKFYAa2WaAA2aYhW8z9_yDNyWY"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="w-9 h-9 leading-9 text-center text-xl text-[#CB997E] rounded-full bg-[#f7dbc5] hover:scale-105 hover:text-[#f7dbc5] hover:bg-[#CB997E] duration-300 fa-brands fa-instagram"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=100004563768695"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="w-9 h-9 leading-9 text-center text-xl text-[#CB997E] rounded-full bg-[#f7dbc5] hover:scale-105 hover:text-[#f7dbc5] hover:bg-[#CB997E] duration-300 fa-brands fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://www.tiktok.com/@ngoisaomoinhu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="w-9 h-9 leading-9 text-center text-xl text-[#CB997E] rounded-full bg-[#f7dbc5] hover:scale-105 hover:text-[#f7dbc5] hover:bg-[#CB997E] duration-300 fa-brands fa-tiktok"></i>
                        </a>
                        <a
                            href="mailto:thanhthao422001@gmail.com ?"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="w-9 h-9 leading-9 text-center text-xl text-[#CB997E] rounded-full bg-[#f7dbc5] hover:scale-105 hover:text-[#f7dbc5] hover:bg-[#CB997E] duration-300 fa-solid fa-envelope"></i>
                        </a>
                    </div>
                    <div className="relative">
                        <p className="intro lg:text-sm xs:text-xs mt-5 pl-5 text-[#524a4f] leading-[22px] text-justify">
                            I'm a Freelance Model, I was born in Da Nang,
                            Vietnam on February 4th, 2001. Welcome to my
                            modeling portfolio ! I started modeling in October
                            2019 and immediately fell in love with meeting
                            talented creatives and helping to bring their ideas
                            to life. I am currently located in Ho Chi Minh City,
                            but am available to travel to other destinations in
                            the Vietnam and internationally. I have experience
                            in editorial, content creation and modeling live
                            streams for various shops
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute lg:hidden w-[1400px] flex h-[260px] top-[22%] xl:top-[19%] left-[-60px] xl:left-[-80px] z-10">
                <div className="w-[180px] mr-96 xl:mr-80">
                    <img
                        src={img3}
                        alt=""
                        className="h-[220px] xl:h-[200px] w-full object-cover object-top"
                    />
                    <p className="pr-5 pb-1 mt-2 text-sm text-[#524a4f] border-b border-[#CB997E]">
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>

                <div className="w-[180px] mr-10 xl:mr-5">
                    <img
                        src={img6}
                        alt=""
                        className="h-[220px] xl:h-[200px] w-full object-cover object-center"
                    />
                    <p className="pr-5 pb-1 mt-2 text-sm text-[#524a4f] border-b border-[#CB997E]">
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>

                <div className="w-[180px] mr-10 xl:mr-5">
                    <img
                        src={img7}
                        alt=""
                        className="h-[220px] xl:h-[200px] w-full object-cover object-center"
                    />
                    <p className="pr-5 pb-1 mt-2 text-sm text-[#524a4f] border-b border-[#CB997E]">
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>

                <div className="w-[360px]">
                    <img
                        src={img8}
                        alt=""
                        className="h-[220px] xl:h-[200px] w-full object-cover object-center"
                    />
                    <p className="w-[180px] pr-5 pb-1 mt-2 text-sm text-[#524a4f] border-b border-[#CB997E]">
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;

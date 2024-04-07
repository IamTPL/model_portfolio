import React from 'react';
import './BannerStyte.css';
import img1 from '../../assets/imgs/avarta.jpg';
import img2 from '../../assets/imgs/banner.jpg';
import img3 from '../../assets/imgs/img3.1.jpg';
import img4 from '../../assets/imgs/img4.jpg';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div
            className="banner overflow-hidden pt-24 xs:pt-12 mb-40 sm:mb-20 xxl:max-w-[1380px] xl:max-w-[1200px] lg:max-w-[980px] mx-auto"
            id="banner"
        >
            <div className="flex relative">
                <div className="absolute top-[50%] left-[50%] md:left-[47%] translate-x-[-45%] translate-y-[-50%] w-[520px] h-[520px] border border-[#b9b9b9] rounded-full -z-50"></div>
                <div className="relative flex-1 pr-5 md:pr-0 flex flex-col items-center">
                    <div className="absolute left-10 top-10 w-20 h-20 bg-[#cb997e79]"></div>
                    <div className="absolute right-10 bottom-28 w-20 h-20 bg-[#cb997e79] rotate-45"></div>
                    <h2 className="title mb-4 mt-5 xs:mb-2 xs:text-[25px] text-[55px] z-50">
                        Thanh Thảo
                    </h2>
                    <p className="subTitle mb-10 text-xl font-medium">Model</p>
                    <div>
                        <div className="relative mb-10">
                            <span className="feature absolute left-[-185px] bottom-[72px] -rotate-90 text-[#fe4748] text-[80px] font-medium">
                                Featured
                            </span>
                            <img
                                src={img1}
                                alt="image"
                                className="w-[230px] h-[260px] object-cover object-top"
                                style={{ boxShadow: '10px 15px #DDBEA9' }}
                            />
                        </div>
                    </div>
                    <p className="text-xs font-medium text-[#524a4f]">
                        SCROLL FOR MORE
                    </p>
                    <p className="text-xs font-medium text-[#524a4f]">INFO</p>
                    <div className="mt-16 w-full flex justify-between items-center">
                        <span className="text-[#747474] text-xs font-medium">
                            PREVIOUS
                        </span>
                        <p className="title text-3xl -translate-x-3">
                            Freelancer
                        </p>
                        <span className="text-[#747474] text-xs font-medium">
                            NEXT
                        </span>
                    </div>
                </div>
                <div className="flex-1 md:hidden overflow-hidden">
                    <div className="flex">
                        <div className="basis-8/12">
                            <img
                                src={img2}
                                alt="image"
                                className="w-full h-[620px] lg:h-[570px] object-cover object-bottom"
                            />
                        </div>
                        <div className="basis-4/12 relative">
                            <NavLink to="/portfolio">
                                <span className="inline-block mt-16 ml-5 border-b border-[#747474] text-[#747474] hover:text-[#cb997e] hover:border-[#cb997e] duration-200 text-sm">
                                    ALL PHOTOS
                                </span>
                            </NavLink>
                            <div className="absolute w-[600px] left-[-180px] lg:left-[-150px] top-32 ">
                                <div className="flex gap-6 z-10">
                                    <img
                                        src={img3}
                                        alt="image"
                                        className="w-[210px] lg:w-[180px] h-[260px] lg:h-[230px] object-cover object-top"
                                    />
                                    <img
                                        src={img4}
                                        alt="image"
                                        className="w-[210px] lg:w-[180px]  h-[260px] lg:h-[230px] object-cover object-top"
                                    />
                                </div>
                            </div>
                            <div className="absolute bottom-5 left-16">
                                <NavLink to="/portfolio">
                                    <i className="fa-solid fa-arrow-right text-[#cb997e] text-4xl rounded-full cursor-pointer"></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

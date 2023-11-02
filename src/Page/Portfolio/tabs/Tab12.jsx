import React, { useEffect, useState } from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab12/tab12.1.JPG';
import img_1x600 from '../../../assets/imgs/tab12/tab12.1x600.jpg';
import img_2 from '../../../assets/imgs/tab12/tab12.2.JPG';
import img_2x600 from '../../../assets/imgs/tab12/tab12.2x600.jpg';
import img_4 from '../../../assets/imgs/tab12/tab12.4.jpg';
import img_4x600 from '../../../assets/imgs/tab12/tab12.4x600.jpg';
import img_5 from '../../../assets/imgs/tab12/tab12.5.JPG';
import img_5x400 from '../../../assets/imgs/tab12/tab12.5x420.jpg';
import img_6 from '../../../assets/imgs/tab12/tab12.6.JPG';
import img_6x400 from '../../../assets/imgs/tab12/tab12.6x420.jpg';
import img_7 from '../../../assets/imgs/tab12/tab12.7.JPG';
import img_7x400 from '../../../assets/imgs/tab12/tab12.7x420.jpg';
import img_8 from '../../../assets/imgs/tab12/tab12.8.JPG';
import img_8x400 from '../../../assets/imgs/tab12/tab12.8x420.jpg';

import img_1_15 from '../../../assets/imgs/tab12/tab15.1x800.jpg';
import img_1_15x600 from '../../../assets/imgs/tab12/tab15.1x600.jpg';
import img_1_15x300 from '../../../assets/imgs/tab12/tab15.1x300.jpg';
import img_2_15 from '../../../assets/imgs/tab12/tab15.2x800.jpg';
import img_2_15x600 from '../../../assets/imgs/tab12/tab15.2x600.jpg';
import img_2_15x300 from '../../../assets/imgs/tab12/tab15.2x300.jpg';
import img_3_15 from '../../../assets/imgs/tab12/tab15.3x850.jpg';
import img_3_15x400 from '../../../assets/imgs/tab12/tab15.3x400.jpg';
import img_4_15 from '../../../assets/imgs/tab12/tab15.4x420.jpg';
import img_4_15x200 from '../../../assets/imgs/tab12/tab15.4x200.jpg';
import img_5_15 from '../../../assets/imgs/tab12/tab15.5.jpg';
import img_5_15x600 from '../../../assets/imgs/tab12/tab15.5x600.jpg';

const Tab12 = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    return (
        <div className="tab12 mt-20 grid grid-cols-3 xs:grid-cols-2 gap-8 sm:gap-4 xs:gap-2">
            <div className="col-span-3 xs:col-span-2">
                <a
                    href={windowWidth > 575 ? img_1 : img_1x600}
                    data-fancybox="tab12"
                >
                    <div
                        className="relative"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab12"]', {});
                        }}
                    >
                        <img
                            className="image_popup"
                            src={windowWidth > 575 ? img_1 : img_1x600}
                            alt=""
                        />
                    </div>
                </a>
            </div>

            <div className="xs:col-span-2">
                <a
                    href={windowWidth > 575 ? img_7 : img_7x400}
                    data-fancybox="tab12"
                >
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab12"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_7x400} alt="" />
                    </div>
                </a>
            </div>

            <div className="col-span-2">
                <a
                    href={windowWidth > 575 ? img_2 : img_2x600}
                    data-fancybox="tab12"
                >
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab12"]', {});
                        }}
                    >
                        <img
                            className="image_popup"
                            src={windowWidth > 575 ? img_2 : img_2x600}
                            alt=""
                        />
                    </div>
                </a>
            </div>

            <div className="xs:col-span-2">
                <a
                    href={windowWidth > 575 ? img_6 : img_6x400}
                    data-fancybox="tab12"
                >
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab12"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_6x400} alt="" />
                    </div>
                </a>
            </div>

            <div className="-translate-y-20 md:-translate-y-0">
                <a
                    href={windowWidth > 575 ? img_8 : img_8x400}
                    data-fancybox="tab12"
                >
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab12"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_8x400} alt="" />
                    </div>
                </a>
            </div>

            <div className="-translate-y-20 md:-translate-y-0">
                <a
                    href={windowWidth > 575 ? img_5 : img_5x400}
                    data-fancybox="tab12"
                >
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab12"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_5x400} alt="" />
                    </div>
                </a>
            </div>

            <div className="col-span-3 xs:col-span-2">
                <a
                    href={windowWidth > 575 ? img_4 : img_4x600}
                    data-fancybox="tab12"
                >
                    <div
                        className="relative"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab12"]', {});
                        }}
                    >
                        <img
                            className="image_popup"
                            src={windowWidth > 575 ? img_4 : img_4x600}
                            alt=""
                        />
                    </div>
                </a>
            </div>

            <div className="col-span-3 xs:col-span-2 grid grid-cols-2">
                <div className="">
                    <a
                        href={windowWidth > 575 ? img_1_15 : img_1_15x600}
                        data-fancybox="tab12"
                    >
                        <div
                            className="relative img_block"
                            onClick={() => {
                                Fancybox.bind('[data-fancybox="tab12"]', {});
                            }}
                        >
                            <img
                                className="image_popup"
                                src={
                                    windowWidth > 575 ? img_1_15 : img_1_15x300
                                }
                                alt=""
                            />
                        </div>
                    </a>
                </div>

                <div className="">
                    <a
                        href={windowWidth > 575 ? img_2_15 : img_2_15x600}
                        data-fancybox="tab12"
                    >
                        <div
                            className="relative  img_block"
                            onClick={() => {
                                Fancybox.bind('[data-fancybox="tab12"]', {});
                            }}
                        >
                            <img
                                className="image_popup"
                                src={
                                    windowWidth > 575 ? img_2_15 : img_2_15x300
                                }
                                alt=""
                            />
                        </div>
                    </a>
                </div>
            </div>

            <div className="w-fit mx-auto col-span-3 xs:col-span-2">
                <a
                    href={windowWidth > 575 ? img_5_15 : img_5_15x600}
                    data-fancybox="tab12"
                >
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab12"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_5_15} alt="" />
                    </div>
                </a>
            </div>

            <div className="col-span-2">
                <a
                    href={windowWidth > 575 ? img_3_15 : img_3_15x400}
                    data-fancybox="tab12"
                >
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab12"]', {});
                        }}
                    >
                        <img
                            className="image_popup"
                            src={windowWidth > 575 ? img_3_15 : img_3_15x400}
                            alt=""
                        />
                    </div>
                </a>
            </div>

            <div className="xs:col-span-2">
                <a href={img_4_15} data-fancybox="tab15">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab15"]', {});
                        }}
                    >
                        <img
                            className="image_popup"
                            src={windowWidth > 575 ? img_4_15 : img_4_15x200}
                            alt=""
                        />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Tab12;

import React, { useEffect, useState } from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab15/tab15.1x800.jpg';
import img_1x600 from '../../../assets/imgs/tab15/tab15.1x600.jpg';
import img_1x300 from '../../../assets/imgs/tab15/tab15.1x300.jpg';
import img_2 from '../../../assets/imgs/tab15/tab15.2x800.jpg';
import img_2x600 from '../../../assets/imgs/tab15/tab15.2x600.jpg';
import img_2x300 from '../../../assets/imgs/tab15/tab15.2x300.jpg';
import img_3 from '../../../assets/imgs/tab15/tab15.3x850.jpg';
import img_3x400 from '../../../assets/imgs/tab15/tab15.3x400.jpg';
import img_4 from '../../../assets/imgs/tab15/tab15.4x420.jpg';
import img_4x200 from '../../../assets/imgs/tab15/tab15.4x200.jpg';
import img_5 from '../../../assets/imgs/tab15/tab15.5.jpg';
import img_5x600 from '../../../assets/imgs/tab15/tab15.5x600.jpg';

const Tab15 = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    return (
        <div className="tab15 mt-20 grid grid-cols-3 gap-8 sm:gap-4 xs:gap-2">
            <div className="col-span-3 grid grid-cols-2">
                <div className="">
                    <a
                        href={windowWidth > 575 ? img_1 : img_1x600}
                        data-fancybox="tab15"
                    >
                        <div
                            className="relative img_block"
                            onClick={() => {
                                Fancybox.bind('[data-fancybox="tab15"]', {});
                            }}
                        >
                            <img
                                className="image_popup"
                                src={windowWidth > 575 ? img_1 : img_1x300}
                                alt=""
                            />
                        </div>
                    </a>
                </div>

                <div className="">
                    <a
                        href={windowWidth > 575 ? img_2 : img_2x600}
                        data-fancybox="tab15"
                    >
                        <div
                            className="relative  img_block"
                            onClick={() => {
                                Fancybox.bind('[data-fancybox="tab15"]', {});
                            }}
                        >
                            <img
                                className="image_popup"
                                src={windowWidth > 575 ? img_2 : img_2x300}
                                alt=""
                            />
                        </div>
                    </a>
                </div>
            </div>

            <div className="w-fit mx-auto col-span-3">
                <a
                    href={windowWidth > 575 ? img_5 : img_5x600}
                    data-fancybox="tab15"
                >
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab15"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_5} alt="" />
                    </div>
                </a>
            </div>

            <div className="col-span-2">
                <a
                    href={windowWidth > 575 ? img_3 : img_3x400}
                    data-fancybox="tab15"
                >
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab15"]', {});
                        }}
                    >
                        <img
                            className="image_popup"
                            src={windowWidth > 575 ? img_3 : img_3x400}
                            alt=""
                        />
                    </div>
                </a>
            </div>

            <div className="col-span">
                <a
                    href={windowWidth > 575 ? img_4 : img_4x200}
                    data-fancybox="tab15"
                >
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab15"]', {});
                        }}
                    >
                        <img
                            className="image_popup"
                            src={windowWidth > 575 ? img_4 : img_4x200}
                            alt=""
                        />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Tab15;

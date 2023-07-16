import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab4/tab4.1.PNG';
import img_1cp from '../../../assets/imgs/tab4/tab4.1cp.jpg';
import img_2 from '../../../assets/imgs/tab4/tab4.2.jpg';
import img_2cp from '../../../assets/imgs/tab4/tab4.2cp.jpg';
import img_3 from '../../../assets/imgs/tab4/tab4.3.PNG';
import img_3cp from '../../../assets/imgs/tab4/tab4.3cp.jpg';
import img_4 from '../../../assets/imgs/tab4/tab4.4.PNG';
import img_4cp from '../../../assets/imgs/tab4/tab4.4cp.jpg';
import img_5 from '../../../assets/imgs/tab4/tab4.5.JPG';
import img_5cp from '../../../assets/imgs/tab4/tab4.5cp.jpg';
import img_6 from '../../../assets/imgs/tab4/tab4.6.JPG';
import img_6cp from '../../../assets/imgs/tab4/tab4.6cp.jpg';
import img_7 from '../../../assets/imgs/tab4/tab4.7.JPG';

const Tab4 = () => {
    return (
        <div className="tab4 mt-20 grid grid-cols-3 xs:grid-cols-2 gap-8 sm:gap-4 xs:gap-2">
            <a href={img_7} data-fancybox="tab4">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab4"]', {});
                    }}
                >
                    <img className="image_popup" src={img_7} alt="" />
                </div>
            </a>

            <a href={img_2} data-fancybox="tab4">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab4"]', {});
                    }}
                >
                    <img
                        className="image_popup h-[611px] mx-auto"
                        src={img_2cp}
                        alt=""
                    />
                </div>
            </a>

            <a href={img_3} data-fancybox="tab4">
                <div
                    className="relative img_block h-full"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab4"]', {});
                    }}
                >
                    <img
                        className="image_popup h-full object-cover"
                        src={img_3cp}
                        alt=""
                    />
                </div>
            </a>

            <a href={img_4} data-fancybox="tab4">
                <div
                    className="relative img_block h-full"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab4"]', {});
                    }}
                >
                    <img
                        className="image_popup h-full object-cover"
                        src={img_4cp}
                        alt=""
                    />
                </div>
            </a>

            <a href={img_5} data-fancybox="tab4">
                <div
                    className="relative img_block h-full"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab4"]', {});
                    }}
                >
                    <img
                        className="image_popup h-full object-cover"
                        src={img_5cp}
                        alt=""
                    />
                </div>
            </a>

            <a href={img_6} data-fancybox="tab4">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab4"]', {});
                    }}
                >
                    <img className="image_popup" src={img_6cp} alt="" />
                </div>
            </a>

            <a href={img_1} data-fancybox="tab4">
                <div
                    className="relative img_block h-full"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab4"]', {});
                    }}
                >
                    <img
                        className="image_popup h-full object-cover"
                        src={img_1cp}
                        alt=""
                    />
                </div>
            </a>
        </div>
    );
};

export default Tab4;

import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab1/tab1.1.jpg';
import img_1cp from '../../../assets/imgs/tab1/tab1.1cp.jpg';
import img_2 from '../../../assets/imgs/tab1/tab1.2.jpg';
import img_2cp from '../../../assets/imgs/tab1/tab1.2cp.jpg';
import img_3 from '../../../assets/imgs/tab1/tab1.3.jpg';
import img_3cp from '../../../assets/imgs/tab1/tab1.3cp.jpg';
import img_4 from '../../../assets/imgs/tab1/tab1.4.jpg';
import img_4cp from '../../../assets/imgs/tab1/tab1.4cp.jpg';
import img_5 from '../../../assets/imgs/tab1/tab1.5.jpg';
import img_5cp from '../../../assets/imgs/tab1/tab1.5cp.jpg';
import img_6 from '../../../assets/imgs/tab1/tab1.6.jpg';
import img_6cp from '../../../assets/imgs/tab1/tab1.6cp.jpg';
import img_7 from '../../../assets/imgs/tab1/tab1.7.jpg';
import img_7cp from '../../../assets/imgs/tab1/tab1.7cp.jpg';
import img_8 from '../../../assets/imgs/tab1/tab1.8.jpg';
import img_8cp from '../../../assets/imgs/tab1/tab1.8cp.jpg';

const Tab1 = () => {
    return (
        <div className="tab1 mt-20 grid grid-cols-3 xs:grid-cols-2 gap-8 sm:gap-4 xs:gap-2">
            <a href={img_1} data-fancybox="tab1">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab1"]', {});
                    }}
                >
                    <img className="image_popup" src={img_1cp} alt="" />
                </div>
            </a>

            <a href={img_2} data-fancybox="tab1">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab1"]', {});
                    }}
                >
                    <img className="image_popup" src={img_2cp} alt="" />
                </div>
            </a>

            <a href={img_3} data-fancybox="tab1">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab1"]', {});
                    }}
                >
                    <img className="image_popup" src={img_3cp} alt="" />
                </div>
            </a>

            <a
                href={img_4}
                data-fancybox="tab1"
                className="row-start-2 row-end-4"
            >
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab1"]', {});
                    }}
                >
                    <img className="image_popup" src={img_4cp} alt="" />
                </div>
            </a>

            <a href={img_5} data-fancybox="tab1" className="col-span-2">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab1"]', {});
                    }}
                >
                    <img className="image_popup" src={img_5cp} alt="" />
                </div>
            </a>

            <a
                href={img_6}
                data-fancybox="tab1"
                className="col-start-2 row-span-2"
            >
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab1"]', {});
                    }}
                >
                    <img className="image_popup" src={img_6cp} alt="" />
                </div>
            </a>

            <a
                href={img_7}
                data-fancybox="tab1"
                className="row-span-2 xs:row-span-1"
            >
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab1"]', {});
                    }}
                >
                    <img className="image_popup" src={img_7cp} alt="" />
                </div>
            </a>

            <a href={img_8} data-fancybox="tab1">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab1"]', {});
                    }}
                >
                    <img className="image_popup" src={img_8cp} alt="" />
                </div>
            </a>
        </div>
    );
};

export default Tab1;

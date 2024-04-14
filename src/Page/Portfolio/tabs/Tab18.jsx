import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab18/tab18.1.jpg';
import img_1cp from '../../../assets/imgs/tab18/tab18.1cp.jpg';
import img_2 from '../../../assets/imgs/tab18/tab18.2.jpg';
import img_2cp from '../../../assets/imgs/tab18/tab18.2cp.jpg';
import img_3 from '../../../assets/imgs/tab18/tab18.3.jpg';
import img_3cp from '../../../assets/imgs/tab18/tab18.3cp.jpg';
import img_4 from '../../../assets/imgs/tab18/tab18.4.jpg';
import img_4cp from '../../../assets/imgs/tab18/tab18.4cp.jpg';
import img_5 from '../../../assets/imgs/tab18/tab18.5.jpg';
import img_5cp from '../../../assets/imgs/tab18/tab18.5cp.jpg';
import img_6 from '../../../assets/imgs/tab18/tab18.6.jpg';
import img_6cp from '../../../assets/imgs/tab18/tab18.6cp.jpg';

const Tab18 = () => {
    return (
        <div className="tab18 mt-20 grid grid-cols-3 xs:grid-cols-2 gap-8 sm:gap-4 xs:gap-2">
            <a href={img_1} data-fancybox="tab18" className="">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab18"]', {});
                    }}
                >
                    <img className="image_popup" src={img_1cp} alt="" />
                </div>
            </a>

            <a href={img_2} data-fancybox="tab18">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab18"]', {});
                    }}
                >
                    <img className="image_popup" src={img_2cp} alt="" />
                </div>
            </a>

            <a href={img_3} data-fancybox="tab18">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab18"]', {});
                    }}
                >
                    <img className="image_popup" src={img_3cp} alt="" />
                </div>
            </a>

            <a href={img_4} data-fancybox="tab18" className="">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab18"]', {});
                    }}
                >
                    <img className="image_popup" src={img_4cp} alt="" />
                </div>
            </a>

            <a href={img_5} data-fancybox="tab18" className="">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab18"]', {});
                    }}
                >
                    <img className="image_popup" src={img_5cp} alt="" />
                </div>
            </a>

            <a href={img_6} data-fancybox="tab18" className="">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab18"]', {});
                    }}
                >
                    <img className="image_popup" src={img_6cp} alt="" />
                </div>
            </a>
        </div>
    );
};

export default Tab18;

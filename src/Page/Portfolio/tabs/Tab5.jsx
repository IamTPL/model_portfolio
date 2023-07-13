import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab5/tab5.1.PNG';
import img_2 from '../../../assets/imgs/tab5/tab5.2.PNG';
import img_3 from '../../../assets/imgs/tab5/tab5.3.PNG';
import img_4 from '../../../assets/imgs/tab5/tab5.4.PNG';
import img_5 from '../../../assets/imgs/tab5/tab5.5.PNG';
import img_6 from '../../../assets/imgs/tab5/tab5.6.PNG';
import img_7 from '../../../assets/imgs/tab5/tab5.7.PNG';

const Tab5 = () => {
    return (
        <div className="tab5 mt-20 grid grid-cols-3 xs:grid-cols-2 gap-8 sm:gap-4 xs:gap-2">
            <a href={img_1} data-fancybox="tab5">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab5"]', {});
                    }}
                >
                    <img className="image_popup" src={img_1} alt="" />
                </div>
            </a>

            <a href={img_2} data-fancybox="tab5">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab5"]', {});
                    }}
                >
                    <img className="image_popup" src={img_2} alt="" />
                </div>
            </a>

            <a href={img_3} data-fancybox="tab5">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab5"]', {});
                    }}
                >
                    <img className="image_popup" src={img_3} alt="" />
                </div>
            </a>

            <a href={img_4} data-fancybox="tab5">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab5"]', {});
                    }}
                >
                    <img className="image_popup" src={img_4} alt="" />
                </div>
            </a>

            <a href={img_5} data-fancybox="tab5">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab5"]', {});
                    }}
                >
                    <img className="image_popup" src={img_5} alt="" />
                </div>
            </a>

            <a href={img_6} data-fancybox="tab5">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab5"]', {});
                    }}
                >
                    <img className="image_popup" src={img_6} alt="" />
                </div>
            </a>

            <a href={img_7} data-fancybox="tab5">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab5"]', {});
                    }}
                >
                    <img className="image_popup" src={img_7} alt="" />
                </div>
            </a>
        </div>
    );
};

export default Tab5;

import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab5/tab5.1.PNG';
import img_1cp from '../../../assets/imgs/tab5/tab5.1cp.PNG';
import img_2 from '../../../assets/imgs/tab5/tab5.2.PNG';
import img_2cp from '../../../assets/imgs/tab5/tab5.2cp.PNG';
import img_3 from '../../../assets/imgs/tab5/tab5.3.PNG';
import img_3cp from '../../../assets/imgs/tab5/tab5.3cp.PNG';
import img_4 from '../../../assets/imgs/tab5/tab5.4.PNG';
import img_4cp from '../../../assets/imgs/tab5/tab5.4cp.PNG';
import img_5 from '../../../assets/imgs/tab5/tab5.5.PNG';
import img_5cp from '../../../assets/imgs/tab5/tab5.5cp.PNG';
import img_6 from '../../../assets/imgs/tab5/tab5.6.PNG';
import img_6cp from '../../../assets/imgs/tab5/tab5.6cp.PNG';
import img_7 from '../../../assets/imgs/tab5/tab5.7.PNG';
import img_7cp from '../../../assets/imgs/tab5/tab5.7cp.PNG';
import video1 from '../../../assets/imgs/tab5/video5.1.mp4';

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
                    <img className="image_popup" src={img_1cp} alt="" />
                </div>
            </a>

            <a href={video1} data-fancybox="tab5">
                <div
                    className="relative img_block max-h-[610px] w-fit mx-auto"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab5"]', {});
                    }}
                >
                    <video autoPlay loop muted className="h-full">
                        <source src={video1} />
                    </video>
                </div>
            </a>

            <a href={img_2} data-fancybox="tab5">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab5"]', {});
                    }}
                >
                    <img className="image_popup" src={img_2cp} alt="" />
                </div>
            </a>

            <a href={img_3} data-fancybox="tab5">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab5"]', {});
                    }}
                >
                    <img className="image_popup" src={img_3cp} alt="" />
                </div>
            </a>

            <a href={img_4} data-fancybox="tab5">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab5"]', {});
                    }}
                >
                    <img className="image_popup" src={img_4cp} alt="" />
                </div>
            </a>

            <a href={img_5} data-fancybox="tab5">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab5"]', {});
                    }}
                >
                    <img className="image_popup" src={img_5cp} alt="" />
                </div>
            </a>

            <a href={img_6} data-fancybox="tab5">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab5"]', {});
                    }}
                >
                    <img className="image_popup" src={img_6cp} alt="" />
                </div>
            </a>

            <a href={img_7} data-fancybox="tab5">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab5"]', {});
                    }}
                >
                    <img className="image_popup" src={img_7cp} alt="" />
                </div>
            </a>
        </div>
    );
};

export default Tab5;

import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab8/tab8.1.jpg';
import img_1cp from '../../../assets/imgs/tab8/tab8.1cp.jpg';
import img_2 from '../../../assets/imgs/tab8/tab8.2.jpg';
import img_2cp from '../../../assets/imgs/tab8/tab8.2cp.jpg';
import img_3 from '../../../assets/imgs/tab8/tab8.3.jpg';
import img_3cp from '../../../assets/imgs/tab8/tab8.3cp.jpg';
import img_4 from '../../../assets/imgs/tab8/tab8.4.jpg';
import img_4cp from '../../../assets/imgs/tab8/tab8.4cp.jpg';
import img_5 from '../../../assets/imgs/tab8/tab8.5.jpg';
import img_5cp from '../../../assets/imgs/tab8/tab8.5cp.jpg';
import img_6 from '../../../assets/imgs/tab8/tab8.6.jpg';
import img_6cp from '../../../assets/imgs/tab8/tab8.6cp.jpg';
import img_7 from '../../../assets/imgs/tab8/tab8.7.jpg';
import img_7cp from '../../../assets/imgs/tab8/tab8.7cp.jpg';
import img_8 from '../../../assets/imgs/tab8/tab8.8.jpg';
import img_8cp from '../../../assets/imgs/tab8/tab8.8cp.jpg';
import img_9 from '../../../assets/imgs/tab8/tab8.9.jpg';
import img_9cp from '../../../assets/imgs/tab8/tab8.9cp.jpg';
import video1 from '../../../assets/imgs/tab8/video8.1.mp4';

const Tab8 = () => {
    return (
        <div className="tab8 mt-20 grid grid-cols-3 xs:grid-cols-2 gap-8 sm:gap-4 xs:gap-2">
            <a href={img_2} data-fancybox="tab8" className="col-span-2">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_2cp} alt="" />
                </div>
            </a>

            <a href={img_1} data-fancybox="tab8">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_1cp} alt="" />
                </div>
            </a>

            <a href={img_4} data-fancybox="tab8">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_4cp} alt="" />
                </div>
            </a>

            <a href={img_3} data-fancybox="tab8" className="col-span-2">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_3cp} alt="" />
                </div>
            </a>

            <a href={video1} data-fancybox="tab8">
                <div
                    className="relative img_block max-h-[610px] w-fit mx-auto"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <video autoPlay loop muted className="h-full">
                        <source src={video1} />
                    </video>
                </div>
            </a>

            <a href={img_5} data-fancybox="tab8">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_5cp} alt="" />
                </div>
            </a>

            <a href={img_6} data-fancybox="tab8">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_6cp} alt="" />
                </div>
            </a>

            <a href={img_7} data-fancybox="tab8">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_7cp} alt="" />
                </div>
            </a>

            <a href={img_8} data-fancybox="tab8">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_8cp} alt="" />
                </div>
            </a>

            <a href={img_9} data-fancybox="tab8">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_9cp} alt="" />
                </div>
            </a>
        </div>
    );
};

export default Tab8;

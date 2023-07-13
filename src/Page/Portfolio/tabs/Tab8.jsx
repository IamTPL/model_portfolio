import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab8/tab8.1.jpg';
import img_2 from '../../../assets/imgs/tab8/tab8.2.jpg';
import img_3 from '../../../assets/imgs/tab8/tab8.3.jpg';
import img_4 from '../../../assets/imgs/tab8/tab8.4.jpg';
import img_5 from '../../../assets/imgs/tab8/tab8.5.jpg';
import img_6 from '../../../assets/imgs/tab8/tab8.6.jpg';
import img_7 from '../../../assets/imgs/tab8/tab8.7.jpg';
import img_8 from '../../../assets/imgs/tab8/tab8.8.jpg';
import img_9 from '../../../assets/imgs/tab8/tab8.9.jpg';

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
                    <img className="image_popup" src={img_2} alt="" />
                </div>
            </a>

            <a href={img_1} data-fancybox="tab8">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_1} alt="" />
                </div>
            </a>

            <a href={img_4} data-fancybox="tab8">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_4} alt="" />
                </div>
            </a>

            <a href={img_3} data-fancybox="tab8" className="col-span-2">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_3} alt="" />
                </div>
            </a>

            <a href={img_5} data-fancybox="tab8">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_5} alt="" />
                </div>
            </a>

            <a href={img_6} data-fancybox="tab8">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_6} alt="" />
                </div>
            </a>

            <a href={img_7} data-fancybox="tab8">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_7} alt="" />
                </div>
            </a>

            <a href={img_8} data-fancybox="tab8">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_8} alt="" />
                </div>
            </a>

            <a href={img_9} data-fancybox="tab8">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab8"]', {});
                    }}
                >
                    <img className="image_popup" src={img_9} alt="" />
                </div>
            </a>
        </div>
    );
};

export default Tab8;

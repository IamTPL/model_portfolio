import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab10/tab10.1.JPG';
import img_1cp from '../../../assets/imgs/tab10/tab10.1cp.JPG';
import img_2 from '../../../assets/imgs/tab10/tab10.2.JPG';
import img_2cp from '../../../assets/imgs/tab10/tab10.2cp.JPG';
import img_3 from '../../../assets/imgs/tab10/tab10.3.JPG';
import img_3cp from '../../../assets/imgs/tab10/tab10.3cp.JPG';
import img_4 from '../../../assets/imgs/tab10/tab10.4.JPG';
import img_4cp from '../../../assets/imgs/tab10/tab10.4cp.JPG';
import img_5 from '../../../assets/imgs/tab10/tab10.5.JPG';
import img_5cp from '../../../assets/imgs/tab10/tab10.5cp.JPG';
import img_6 from '../../../assets/imgs/tab10/tab10.6.JPG';
import img_6cp from '../../../assets/imgs/tab10/tab10.6cp.JPG';
import img_7 from '../../../assets/imgs/tab10/tab10.7.JPG';
import img_7cp from '../../../assets/imgs/tab10/tab10.7cp.JPG';
import img_8 from '../../../assets/imgs/tab10/tab10.8.JPG';
import img_8cp from '../../../assets/imgs/tab10/tab10.8cp.JPG';
import img_9 from '../../../assets/imgs/tab10/tab10.9.JPG';
import img_9cp from '../../../assets/imgs/tab10/tab10.9cp.JPG';

const Tab10 = () => {
    return (
        <div className="tab10 mt-20 grid grid-cols-3 xs:grid-cols-2 gap-8 sm:gap-4 xs:gap-2">
            <a href={img_1} data-fancybox="tab10">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab10"]', {});
                    }}
                >
                    <img className="image_popup" src={img_1cp} alt="" />
                </div>
            </a>

            <a href={img_5} data-fancybox="tab10">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab10"]', {});
                    }}
                >
                    <img className="image_popup" src={img_5cp} alt="" />
                </div>
            </a>

            <a href={img_3} data-fancybox="tab10">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab10"]', {});
                    }}
                >
                    <img className="image_popup" src={img_3cp} alt="" />
                </div>
            </a>

            <a href={img_4} data-fancybox="tab10">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab10"]', {});
                    }}
                >
                    <img className="image_popup" src={img_4cp} alt="" />
                </div>
            </a>

            <a href={img_2} data-fancybox="tab10">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab10"]', {});
                    }}
                >
                    <img className="image_popup" src={img_2cp} alt="" />
                </div>
            </a>

            <a href={img_6} data-fancybox="tab10">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab10"]', {});
                    }}
                >
                    <img className="image_popup" src={img_6cp} alt="" />
                </div>
            </a>

            <a href={img_7} data-fancybox="tab10">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab10"]', {});
                    }}
                >
                    <img className="image_popup" src={img_7cp} alt="" />
                </div>
            </a>

            <a href={img_8} data-fancybox="tab10">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab10"]', {});
                    }}
                >
                    <img className="image_popup" src={img_8cp} alt="" />
                </div>
            </a>

            <a href={img_9} data-fancybox="tab10">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab10"]', {});
                    }}
                >
                    <img className="image_popup" src={img_9cp} alt="" />
                </div>
            </a>
        </div>
    );
};

export default Tab10;

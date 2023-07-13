import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab6/tab6.1.jpg';
import img_2 from '../../../assets/imgs/tab6/tab6.2.jpg';
import img_3 from '../../../assets/imgs/tab6/tab6.3.jpg';
import img_4 from '../../../assets/imgs/tab6/tab6.4.jpg';

const Tab6 = () => {
    return (
        <div className="tab6 mt-20 grid grid-cols-3 xs:grid-cols-2 gap-8 sm:gap-4 xs:gap-2">
            <a href={img_1} data-fancybox="tab6">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab6"]', {});
                    }}
                >
                    <img className="image_popup" src={img_1} alt="" />
                </div>
            </a>

            <a href={img_2} data-fancybox="tab6">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab6"]', {});
                    }}
                >
                    <img className="image_popup" src={img_2} alt="" />
                </div>
            </a>

            <a href={img_3} data-fancybox="tab6">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab6"]', {});
                    }}
                >
                    <img className="image_popup" src={img_3} alt="" />
                </div>
            </a>

            <a href={img_4} data-fancybox="tab6">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab6"]', {});
                    }}
                >
                    <img className="image_popup" src={img_4} alt="" />
                </div>
            </a>
        </div>
    );
};

export default Tab6;

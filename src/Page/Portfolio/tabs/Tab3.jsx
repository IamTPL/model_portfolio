import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab3/tab3.1.jpg';
import img_1cp from '../../../assets/imgs/tab3/tab3.1cp.jpg';
import img_2 from '../../../assets/imgs/tab3/tab3.2.jpg';
import img_2cp from '../../../assets/imgs/tab3/tab3.2cp.jpg';
import img_3 from '../../../assets/imgs/tab3/tab3.3.jpg';
import img_3cp from '../../../assets/imgs/tab3/tab3.3cp.jpg';
import img_6 from '../../../assets/imgs/tab3/tab3.6.jpg';
import img_6cp from '../../../assets/imgs/tab3/tab3.6cp.jpg';
import img_7 from '../../../assets/imgs/tab3/tab3.7.jpg';
import img_7cp from '../../../assets/imgs/tab3/tab3.7cp.jpg';

const Tab3 = () => {
    return (
        <div className="tab3 mt-20 grid grid-cols-3 xs:grid-cols-2 gap-8 sm:gap-4 xs:gap-2">
            <a href={img_1} data-fancybox="tab3">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab3"]', {});
                    }}
                >
                    <img className="image_popup" src={img_1cp} alt="" />
                </div>
            </a>

            <a href={img_2} data-fancybox="tab3">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab3"]', {});
                    }}
                >
                    <img className="image_popup" src={img_2cp} alt="" />
                </div>
            </a>

            <a href={img_3} data-fancybox="tab3">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab3"]', {});
                    }}
                >
                    <img className="image_popup" src={img_3cp} alt="" />
                </div>
            </a>

            <a href={img_6} data-fancybox="tab3">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab3"]', {});
                    }}
                >
                    <img className="image_popup" src={img_6cp} alt="" />
                </div>
            </a>

            <a href={img_7} data-fancybox="tab3">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab3"]', {});
                    }}
                >
                    <img className="image_popup" src={img_7cp} alt="" />
                </div>
            </a>
        </div>
    );
};

export default Tab3;

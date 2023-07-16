import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab5/tab5.1.PNG';
import img_1cp from '../../../assets/imgs/tab5/tab5.1cp.PNG';
import img_2 from '../../../assets/imgs/tab5/tab5.2.PNG';
import img_2cp from '../../../assets/imgs/tab5/tab5.2cp.PNG';
import img_3 from '../../../assets/imgs/tab5/tab5.3.PNG';
import img_3cp from '../../../assets/imgs/tab5/tab5.3cp.PNG';
import img_7 from '../../../assets/imgs/tab5/tab5.7.PNG';
import img_7cp from '../../../assets/imgs/tab5/tab5.7cp.PNG';

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

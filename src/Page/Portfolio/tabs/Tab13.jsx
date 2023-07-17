import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab13/tab13.1.jpg';
import img_2 from '../../../assets/imgs/tab13/tab13.2.jpg';
import img_2cp from '../../../assets/imgs/tab13/tab13.2cp.jpg';
import img_3 from '../../../assets/imgs/tab13/tab13.3.jpg';
import img_3cp from '../../../assets/imgs/tab13/tab13.3cp.jpg';
import img_4 from '../../../assets/imgs/tab13/tab13.4.jpg';
import img_4cp from '../../../assets/imgs/tab13/tab13.4cp.jpg';

const Tab13 = () => {
    return (
        <div className="tab13 mt-20 grid grid-cols-3 xs:grid-cols-2 gap-8 sm:gap-4 xs:gap-2">
            <a
                href={img_1}
                data-fancybox="tab13"
                className="row-span-2 col-span-2"
            >
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab13"]', {});
                    }}
                >
                    <img className="image_popup" src={img_1} alt="" />
                </div>
            </a>

            <a href={img_2} data-fancybox="tab13">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab13"]', {});
                    }}
                >
                    <img className="image_popup" src={img_2cp} alt="" />
                </div>
            </a>

            <a href={img_3} data-fancybox="tab13">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab13"]', {});
                    }}
                >
                    <img className="image_popup" src={img_3cp} alt="" />
                </div>
            </a>

            <a href={img_4} data-fancybox="tab13" className="sm:col-span-2">
                <div
                    className="relative img_block"
                    onClick={() => {
                        Fancybox.bind('[data-fancybox="tab13"]', {});
                    }}
                >
                    <img className="image_popup" src={img_4cp} alt="" />
                </div>
            </a>
        </div>
    );
};

export default Tab13;

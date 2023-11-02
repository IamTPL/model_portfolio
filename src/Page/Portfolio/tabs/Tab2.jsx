import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab2/tab2.1.PNG';
import img_1cp from '../../../assets/imgs/tab2/tab2.1cp.PNG';
import img_2 from '../../../assets/imgs/tab2/tab2.2.PNG';
import img_2cp from '../../../assets/imgs/tab2/tab2.2cp.PNG';
import img_3 from '../../../assets/imgs/tab2/tab2.3.PNG';
import img_3cp from '../../../assets/imgs/tab2/tab2.3cp.PNG';
import img_7 from '../../../assets/imgs/tab2/tab2.7.PNG';
import img_7cp from '../../../assets/imgs/tab2/tab2.7cp.PNG';

const Tab2 = () => {
    return (
        <div className="tab2 mt-20 grid grid-cols-2 xs:grid-cols-2 gap-y-28 md:gap-8 sm:gap-4 xs:gap-2">
            <div className="w-fit relative">
                <a href={img_1} data-fancybox="tab2">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab2"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_1cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_1 text-[#e9ccab]">Skrttttt</p>
            </div>

            <div className="w-fit relative ml-auto mt-32 lg:mt-0">
                <a href={img_2} data-fancybox="tab2">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab2"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_2cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_2 text-[#e9ccab]">Yuriiiiii</p>
            </div>

            <div className="w-fit relative">
                <a href={img_3} data-fancybox="tab2">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab2"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_3cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_3 text-[#e9ccab]">Hmmmmmm</p>
            </div>

            <div className="w-fit relative ml-auto mt-32 lg:mt-0">
                <a href={img_7} data-fancybox="tab2">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab2"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_7cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_4 text-[#e9ccab]">Gruhhhhh</p>
            </div>
        </div>
    );
};

export default Tab2;

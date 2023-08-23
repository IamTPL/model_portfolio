import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab6/tab6.1.jpg';
import img_1cp from '../../../assets/imgs/tab6/tab6.1cp.jpg';
import img_2 from '../../../assets/imgs/tab6/tab6.2.jpg';
import img_2cp from '../../../assets/imgs/tab6/tab6.2cp.jpg';
import img_3 from '../../../assets/imgs/tab6/tab6.3.jpg';
import img_3cp from '../../../assets/imgs/tab6/tab6.3cp.jpg';
import img_4 from '../../../assets/imgs/tab6/tab6.4.jpg';
import img_4cp from '../../../assets/imgs/tab6/tab6.4cp.jpg';

const Tab6 = () => {
    return (
        <div className="tab6 mt-20 grid grid-cols-2 xs:grid-cols-2 gap-y-28 md:gap-8 sm:gap-4 xs:gap-2">
            <div className="w-fit relative">
                <a href={img_1} data-fancybox="tab6">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab6"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_1cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_1 text-[#79a3cb]">Skrttttt</p>
            </div>

            <div className="w-fit relative ml-auto mt-32 lg:mt-0">
                <a href={img_2} data-fancybox="tab6">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab6"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_2cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_2 text-[#79a3cb]">Yuriiiiii</p>
            </div>

            <div className="w-fit relative">
                <a href={img_3} data-fancybox="tab6">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab6"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_3cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_3 text-[#79a3cb]">Hmmmmmm</p>
            </div>

            <div className="w-fit relative ml-auto mt-32 lg:mt-0">
                <a href={img_4} data-fancybox="tab6">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab6"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_4cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_4 text-[#79a3cb]">Gruhhhhh</p>
            </div>
        </div>
    );
};

export default Tab6;

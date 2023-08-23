import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab12/tab12.1.JPG';
import img_1cp from '../../../assets/imgs/tab12/tab12.1cp.JPG';
import img_2 from '../../../assets/imgs/tab12/tab12.2.JPG';
import img_2cp from '../../../assets/imgs/tab12/tab12.2cp.JPG';
import img_3 from '../../../assets/imgs/tab12/tab12.3.JPG';
import img_3cp from '../../../assets/imgs/tab12/tab12.3cp.JPG';
import img_4 from '../../../assets/imgs/tab12/tab12.4.jpg';
import img_4cp from '../../../assets/imgs/tab12/tab12.4cp.jpg';

const Tab12 = () => {
    return (
        <div className="tab12 mt-20 grid grid-cols-2 xs:grid-cols-2 gap-y-28 md:gap-8 sm:gap-4 xs:gap-2">
            <div className="w-fit relative">
                <a href={img_1} data-fancybox="tab12">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab12"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_1cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_1 text-[#d3bcad]">Skrttttt</p>
            </div>

            <div className="w-fit relative ml-auto mt-32 lg:mt-0">
                <a href={img_2} data-fancybox="tab12">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab12"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_2cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_2 text-[#d3bcad]">Yuriiiiii</p>
            </div>

            <div className="w-fit relative">
                <a href={img_3} data-fancybox="tab12">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab12"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_3cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_3 text-[#d3bcad]">Hmmmmmm</p>
            </div>

            <div className="w-fit relative ml-auto mt-32 lg:mt-0">
                <a href={img_4} data-fancybox="tab12">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab12"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_4cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_4 text-[#d3bcad]">Gruhhhhh</p>
            </div>
        </div>
    );
};

export default Tab12;

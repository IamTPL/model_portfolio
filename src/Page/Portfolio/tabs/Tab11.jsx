import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab11/tab11.1.JPG';
import img_1cp from '../../../assets/imgs/tab11/tab11.1cp.JPG';
import img_2 from '../../../assets/imgs/tab11/tab11.2.JPG';
import img_2cp from '../../../assets/imgs/tab11/tab11.2cp.JPG';
import img_3 from '../../../assets/imgs/tab11/tab11.3.JPG';
import img_3cp from '../../../assets/imgs/tab11/tab11.3cp.JPG';
import img_4 from '../../../assets/imgs/tab11/tab11.4.JPG';
import img_4cp from '../../../assets/imgs/tab11/tab11.4cp.JPG';
import img_5 from '../../../assets/imgs/tab11/tab11.5.JPG';
import img_5cp from '../../../assets/imgs/tab11/tab11.5cp.JPG';
import img_6 from '../../../assets/imgs/tab11/tab11.6.JPG';
import img_6cp from '../../../assets/imgs/tab11/tab11.6cp.JPG';
import img_7 from '../../../assets/imgs/tab11/tab11.7.JPG';
import img_7cp from '../../../assets/imgs/tab11/tab11.7cp.JPG';

const Tab11 = () => {
    return (
        <div>
            <div className="tab11 mt-20 grid grid-cols-3 gap-8 sm:gap-4 xs:gap-2">
                <a href={img_5} data-fancybox="tab11">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab11"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_5cp} alt="" />
                    </div>
                </a>

                <a href={img_6} data-fancybox="tab11">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab11"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_6cp} alt="" />
                    </div>
                </a>

                <a href={img_7} data-fancybox="tab11">
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab11"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_7cp} alt="" />
                    </div>
                </a>
            </div>

            <h1 className="py-14 xs:py-8 text-4xl md:text-xl xs:text-sm title">
                Lorem ipsum, dolor sit amet consectetur
            </h1>

            <div className="grid grid-cols-2 gap-8 sm:gap-4 xs:gap-2">
                <div className="w-fit relative">
                    <a href={img_4} data-fancybox="tab11">
                        <div
                            className="relative img_block"
                            onClick={() => {
                                Fancybox.bind('[data-fancybox="tab11"]', {});
                            }}
                        >
                            <img className="image_popup" src={img_4cp} alt="" />
                        </div>
                    </a>
                    <p className="tag_mess_1 text-[#b08c67]">Skrttttt</p>
                </div>

                <div className="w-fit relative ml-auto mt-32 lg:mt-0">
                    <a href={img_1} data-fancybox="tab11">
                        <div
                            className="relative img_block"
                            onClick={() => {
                                Fancybox.bind('[data-fancybox="tab11"]', {});
                            }}
                        >
                            <img className="image_popup" src={img_1cp} alt="" />
                        </div>
                    </a>
                    <p className="tag_mess_2 text-[#b08c67]">Yuriiiiii</p>
                </div>

                <div className="w-fit relative">
                    <a href={img_2} data-fancybox="tab11">
                        <div
                            className="relative img_block"
                            onClick={() => {
                                Fancybox.bind('[data-fancybox="tab11"]', {});
                            }}
                        >
                            <img className="image_popup" src={img_2cp} alt="" />
                        </div>
                    </a>
                    <p className="tag_mess_3 text-[#b08c67]">Hmmmmmm</p>
                </div>

                <div className="w-fit relative ml-auto mt-32 lg:mt-0">
                    <a href={img_3} data-fancybox="tab11">
                        <div
                            className="relative img_block"
                            onClick={() => {
                                Fancybox.bind('[data-fancybox="tab11"]', {});
                            }}
                        >
                            <img className="image_popup" src={img_3cp} alt="" />
                        </div>
                    </a>
                    <p className="tag_mess_4 text-[#b08c67]">Gruhhhhh</p>
                </div>
            </div>
        </div>
    );
};

export default Tab11;

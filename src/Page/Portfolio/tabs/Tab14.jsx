import React, { useEffect, useState } from 'react';
import { Fancybox } from '@fancyapps/ui';
import img_1 from '../../../assets/imgs/tab14/tab14.1.jpg';
import img_1cp from '../../../assets/imgs/tab14/tab14.1cp.jpg';
import img_1x600 from '../../../assets/imgs/tab14/tab14.1x600.jpg';
import img_2 from '../../../assets/imgs/tab14/tab14.2.jpg';
import img_2cp from '../../../assets/imgs/tab14/tab14.2cp.jpg';
import img_2x600 from '../../../assets/imgs/tab14/tab14.2x600.jpg';
import img_3 from '../../../assets/imgs/tab14/tab14.3.jpg';
import img_3cp from '../../../assets/imgs/tab14/tab14.3cp.jpg';
import img_3x600 from '../../../assets/imgs/tab14/tab14.3x600.jpg';
import img_4 from '../../../assets/imgs/tab14/tab14.4.jpg';
import img_4cp from '../../../assets/imgs/tab14/tab14.4cp.jpg';
import img_4x600 from '../../../assets/imgs/tab14/tab14.4x600.jpg';

const Tab14 = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    return (
        <div className="tab14 mt-20 grid grid-cols-2 xs:grid-cols-2 gap-y-28 md:gap-8 sm:gap-4 xs:gap-2">
            <div className="w-fit relative">
                <a
                    href={windowWidth > 575 ? img_1 : img_1x600}
                    data-fancybox="tab14"
                >
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab14"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_1cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_1">Skrttttt</p>
            </div>

            <div className="w-fit relative ml-auto mt-32 lg:mt-0">
                <a
                    href={windowWidth > 575 ? img_2 : img_2x600}
                    data-fancybox="tab14"
                >
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab14"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_2cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_2">Yuriiiiii</p>
            </div>

            <div className="w-fit relative">
                <a
                    href={windowWidth > 575 ? img_3 : img_3x600}
                    data-fancybox="tab14"
                >
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab14"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_3cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_3">Hmmmmmm</p>
            </div>

            <div className="w-fit relative ml-auto mt-32 lg:mt-0">
                <a
                    href={windowWidth > 575 ? img_4 : img_4x600}
                    data-fancybox="tab14"
                >
                    <div
                        className="relative img_block"
                        onClick={() => {
                            Fancybox.bind('[data-fancybox="tab14"]', {});
                        }}
                    >
                        <img className="image_popup" src={img_4cp} alt="" />
                    </div>
                </a>
                <p className="tag_mess_4">Gruhhhhh</p>
            </div>
        </div>
    );
};

export default Tab14;

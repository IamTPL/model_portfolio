import React from 'react';
import './portfolioStyle.css';
import { Tabs } from 'antd';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';
import Tab6 from './tabs/Tab6';
import Tab8 from './tabs/Tab8';
import Tab9 from './tabs/Tab9';
import Tab10 from './tabs/Tab10';
import Tab11 from './tabs/Tab11';
import Tab12 from './tabs/Tab12';
import Tab13 from './tabs/Tab13';

const Portfolio = () => {
    const items = [
        {
            key: '1',
            label: `1`,
            children: <Tab1></Tab1>,
        },
        {
            key: '2',
            label: `2`,
            children: <Tab2></Tab2>,
        },
        {
            key: '3',
            label: `3`,
            children: <Tab3></Tab3>,
        },

        {
            key: '4',
            label: `4`,
            children: <Tab6></Tab6>,
        },

        {
            key: '5',
            label: `5`,
            children: <Tab8></Tab8>,
        },
        {
            key: '6',
            label: `6`,
            children: <Tab9></Tab9>,
        },
        {
            key: '7',
            label: `7`,
            children: <Tab10></Tab10>,
        },
        {
            key: '8',
            label: `8`,
            children: <Tab11></Tab11>,
        },
        {
            key: '9',
            label: `9`,
            children: <Tab12></Tab12>,
        },
        {
            key: '10',
            label: `10`,
            children: <Tab13></Tab13>,
        },
    ];

    return (
        <div className="my-24 md:mb-10 max-w-[1280px] mx-auto">
            <div className="text-center">
                <h1 className="port_title text-4xl xs:text-3xl">
                    MODELING
                    <span className="bg-black text-white px-2 ml-2">
                        PORTFOLIO
                    </span>
                </h1>
            </div>
            <div className="mt-5 text-center mx-auto lg:px-10 sm:px-4 xs:px-2">
                <Tabs defaultActiveKey="10" items={items} />
            </div>
        </div>
    );
};

export default Portfolio;

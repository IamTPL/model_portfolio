import React, { useEffect, useRef, useState } from 'react';
import './HeaderStyle.css';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const lastScrollTop = useRef(0);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    const handleScroll = () => {
        const { pageYOffset } = window;

        if (lastScrollTop.current < pageYOffset) {
            setIsHeaderVisible(false);
        } else {
            setIsHeaderVisible(true);
        }

        if (lastScrollTop.current > 100) {
        }

        lastScrollTop.current = pageYOffset;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`header fixed ${
                isHeaderVisible ? 'top-0' : 'top-[-80px]'
            } left-0 right-0 bg-[#efefef] duration-300 z-50`}
        >
            <div className="px-[50px] h-20 xs:h-14 flex justify-between items-center">
                <HashLink to="/">
                    <h1
                        className="cursor-pointer logoHeader text-2xl hover:scale-110 duration-300"
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        Yuri
                    </h1>
                </HashLink>

                <div className="flex sm:hidden justify-between gap-20">
                    <HashLink
                        to="/#banner"
                        className="font-light hover:text-[#cb997e] duration-300"
                    >
                        HOME
                    </HashLink>
                    <HashLink
                        to="/#about"
                        className="font-light hover:text-[#cb997e] duration-300"
                    >
                        ABOUT
                    </HashLink>
                    <HashLink
                        to="/#projects"
                        className="font-light hover:text-[#cb997e] duration-300"
                    >
                        PROJECTS
                    </HashLink>
                </div>

                <div>
                    <NavLink
                        to="/portfolio"
                        className="btn_portfolio text-lg hover:text-black duration-300"
                    >
                        <div className="flex items-center animate-pulse hover:animate-none">
                            <span className="font-bold">Portfolio</span>
                            <i className="fa-solid fa-plus ml-1 text-xs"></i>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;

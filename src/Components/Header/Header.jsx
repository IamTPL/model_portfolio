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

        if (pageYOffset <= 10) {
            setIsHeaderVisible(true);
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
            <div className="px-[50px] h-20 xs:h-16 flex justify-between items-center">
                <HashLink to="/" className="xs:flex-1">
                    <h1
                        className="cursor-pointer logoHeader text-[28px] hover:scale-110 duration-300"
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

                <NavLink
                    to="/portfolio"
                    className="xs:flex-1 xs:flex xs:justify-end btn_portfolio text-lg hover:text-black duration-300"
                >
                    <div className="flex items-center text-xl animate-pulse hover:animate-none">
                        <span className="font-bold">Portfolio</span>
                        <i className="fa-solid fa-plus ml-1 text-xs"></i>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;

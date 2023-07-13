import React from 'react';

const Footer = () => {
    return (
        <div className="my-8 xs:my-4">
            <div className="mb-5 xs:mb-2 text-center space-x-3">
                <a
                    href="https://www.instagram.com/nglyuri/?fbclid=IwAR1Ljq83ivMqzYjnQwaCRRb-ZqdF54ct_aKFYAa2WaAA2aYhW8z9_yDNyWY"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-instagram text-2xl"></i>
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100004563768695"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-facebook-f text-xl"></i>
                </a>
            </div>
            <div className="text-center text-sm font-semibold">
                ©2023 by Rico
            </div>
        </div>
    );
};

export default Footer;

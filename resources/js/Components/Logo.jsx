import React from 'react';
import logo from '../../assets/images/logo.png'

const Logo = () => {
    return (
        <div className="rounded-full w-20 h-20 border border-white max-w-md mx-auto" >
            <img loading="lazy" className="pointer-events-none w-20 h-20" src={logo} alt="logo-dimension" />
        </div>
    );
};

export default Logo;

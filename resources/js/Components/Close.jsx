import React from 'react';
import close from '../../assets/icons/icons8-close-30.png'

const Close = () => {

    const handleClose = () => {window.location.href ='/'}
    return (
        <div onClick={handleClose} className="self-end p-2 rounded-full hover:bg-white hover:bg-opacity-10 cursor-pointer">
            <img loading="lazy" className="md:w-auto md:h-auto w-5 h-5 pointer-events-none" src={close} alt="close-icon" />
        </div>
    );
};

export default Close;

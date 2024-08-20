import React from 'react';

const PageHead = ({title}) => {
    return (
        <div>
            <h2 className="text-white uppercase font-bold text-xl md:text-3xl border-b-2 w-fit border-b-white pb-1">{title}</h2>
        </div>
    );
};

export default PageHead;

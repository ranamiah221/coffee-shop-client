import React from 'react';

const SectionHeader = ({header, subHeader}) => {
    return (
        <div className='space-y-2 text-center'>
            <p>--- {subHeader} ---</p>
            <h1 className='text-2xl font-medium text-[#331A15]'>{header}</h1>
        </div>
    );
};

export default SectionHeader;
import React from 'react';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='text-center lg:mt-10 mt-5'>
            <p>--- {subTitle} ---</p>
            <h1 className='text-4xl font-light'><i>{title}</i></h1>
        </div>
    );
};

export default SectionTitle;
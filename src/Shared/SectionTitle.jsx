import React from 'react';
import 'animate.css';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='text-center lg:mt-10 mt-5 animate__animated animate__bounce'>
            <p>--- {subTitle} ---</p>
            <h1 className='text-4xl font-light'><i>{title}</i></h1>
        </div>
    );
};

export default SectionTitle;
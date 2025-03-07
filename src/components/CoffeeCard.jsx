import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const { name, chef, supplier, taste, category, detail, photoUrl } = coffee;
    return (
        <div className='bg-[#F5F4F1]'>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={photoUrl}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
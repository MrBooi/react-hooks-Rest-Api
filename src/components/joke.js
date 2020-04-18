import React from 'react';

const Joke = props => {
    const { name, category } = props.data;
    return (
        <div className='justify-content-center'>

            <div >
                <div className="card-header">
                    {category}
                </div>
                <div className="card-body d-flex align-items-center justify-content-center ">
                    <p className="card-text text-center">{name}</p>
                </div>
            </div>

        </div>

    );
};

export default Joke;


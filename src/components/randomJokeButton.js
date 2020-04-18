import React from 'react';

const RandomJokeButton = (props) => {
    const { 
        onGetMoreJokes } = props;

    return (
        <button className='btn btn-secondary' onClick={onGetMoreJokes}>
           More Jokes
        </button>
    );
};

export default RandomJokeButton;
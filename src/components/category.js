import React, { useEffect } from 'react';

import { UseApi } from '../hooks/api';
import Joke from './joke';

const Category = props => {

    const [isLoading, fetchData] = UseApi(
        `https://api.chucknorris.io/jokes/random?category=${props.selectedCateg}`,
        [props.selectedCateg]
    );

    let loadedJoke = null;

    if (fetchData) {
        loadedJoke = {
            id: fetchData.id,
            name: fetchData.value,
            url: fetchData.icon_url,
            category: fetchData.categories[0]
        };
    }

    useEffect(() => {
        return () => {
            console.log('did component unmount');
        }
    }, []);

    let content = <p>Loading category...</p>;

    if (loadedJoke && !isLoading) {

        content = (<Joke
            data={loadedJoke}
        />
        )

    } else if (!isLoading && !loadedJoke) {
        content = <p>Opps Failed to fetch movies</p>
    }
    return content;
}

export default  React.memo(Category) 

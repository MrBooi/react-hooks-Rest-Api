import { useState, useEffect } from 'react';

export const UseApi = (url, dependencies) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchData, setFetchData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        console.log('sending request');
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Opps! failed to fetch Data.')
                }
                return response.json();

            }).then(data => {
                setIsLoading(false);
                setFetchData(data);
            }).catch(err => {
                console.log(`something went wrong ${err}`);
                setIsLoading(false);
            })

    }, dependencies);

    return [isLoading, fetchData];
};


import React from 'react';

import { UseApi } from '../hooks/api';

const CategoryList = (props) => {

    const [isLoading, fetchData] = UseApi('https://api.chucknorris.io/jokes/categories', []);

    const selectedCategory = fetchData ? fetchData
        .map((category, index) => ({
            name: category,
            id: index + 1,
        })) : [];

    let content = <p>Loading Wait....</p>

    if (!isLoading && selectedCategory && selectedCategory.length > 0) {
        content = (<select
            onChange={props.onSelectedItem}
            value={props.selectedCateg}
        >
            {selectedCategory.map(category => (
                <option key={category.id} value={category.name}>
                    {category.name}
                </option>
            ))}

        </select>
        );
    } else if (!isLoading && !selectedCategory || selectedCategory.length === 0) {
        content = <p>Opps not able to fetch any data</p>
    }

    return content;
}

export default CategoryList;

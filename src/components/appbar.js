import React from 'react';

const root = {
    navbar: `navbar 
           navbar-light
           bg-light`
};



const AppBar = () => {
    return (
        <div>
            <nav className={root.navbar}>
                <h3>Chuck Jokes</h3>
            </nav>
        </div>
    )
}

export default AppBar;







import React from 'react';


const SearchBox = ({searchChange}) => {

    console.log("Rendering SearchBox")

    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue"
                   aria-label="Search Robots"
                   type="search"
                   placeholder="search robots"
                   onChange={searchChange}/>
        </div>
    );

};

export default SearchBox;

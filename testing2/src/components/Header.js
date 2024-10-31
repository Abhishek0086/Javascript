import React from 'react';

function Header(props){
    return(
       /*  <div className="header">
            <h1>My Todo List</h1>
        </div> */
        <h1>{props.name}</h1>
    )
}

export default Header;
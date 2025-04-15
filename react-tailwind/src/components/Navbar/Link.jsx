import React from "react";

const Link = ({route}) => {
    return(
        <li className="px-5 mr-10 hover:bg-amber-500 my-2 bg-amber-200 rounded-2xl py-1">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
export default Link;
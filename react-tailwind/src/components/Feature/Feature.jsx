import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    console.log(feature)
    return (
        <div>
            <p className='flex items-center gap-2 justify-start'><FaRegCheckCircle />{feature}</p>
        </div>
    );
}

export default Feature;
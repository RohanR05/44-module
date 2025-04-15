import React from 'react';
import Feature from '../feature/Feature';

const Pricecard = ({pricing}) => {

    const {name,id,price,time,features} = pricing;
    return (
        <div className='bg-amber-600 rounded-2xl border border-amber-900 p-4 space-y-2'>
            <div >
                <h1 className='text-4xl'>{name}</h1>
                <h1 className='text-2xl'>{price}</h1>
            </div>
            <div className='bg-amber-400 rounded-2xl px-3 py-1'>
                <p>{time}</p>
                <p className='text-xl my-3'>Speacil Features:</p>
                {
                    features.map((feature,index)=> <Feature key={index} feature={feature}></Feature>)
                }
            </div>
        </div>
    );
};

export default Pricecard;
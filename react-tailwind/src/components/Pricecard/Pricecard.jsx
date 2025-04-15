import React from 'react';
import Feature from '../feature/Feature';

const Pricecard = ({pricing}) => {

    const {name,id,price,time,features} = pricing;
    return (
        <div className='bg-amber-600 rounded-2xl border border-amber-900 p-4 space-y-2 flex flex-col'>
            <div >
                <h1 className='text-3xl font-medium md:text-4xl lg:text-5xl lg:h-24'>{name}</h1>
                <h1 className='text-xl md:text-2xl'>{price}</h1>
            </div>
            <div className='bg-amber-400 rounded-2xl px-3 py-1 flex-1'>
                <p>{time}</p>
                <p className='text-xl my-3'>Speacil Features:</p>
                {
                    features.map((feature,index)=> <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="btn w-full text-xl md:text-2xl py-0 md:py-2 rounded-2xl bg-black text-violet-300">Subscribe</button>
        </div>
    );
};

export default Pricecard;
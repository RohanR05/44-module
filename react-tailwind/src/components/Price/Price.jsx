import React, { use } from 'react';
import Pricecard from '../Pricecard/Pricecard';
import Daisy from '../Daisy/Daisy';

const Price = ({pricePromise}) => {

    const priceData = use(pricePromise);

    return (
        <div>
            <h2 className='text-4xl md:text-7xl text-center my-5 font-bold'>Get our Membership</h2>
            <div className='grid lg:grid-cols-3 lg:gap-12 md:grid-cols-2 gap-7 m-2'>
                {/* {
                    priceData.map(pricing => <Pricecard key={pricing.id} pricing={pricing}></Pricecard>)
                } */}
                {
                    priceData.map(pricing => <Daisy key={pricing.id} pricing={pricing}></Daisy>)
                }
            </div>
        </div>
    );
};

export default Price;
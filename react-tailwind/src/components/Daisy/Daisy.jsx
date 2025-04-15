import React from 'react';

const Daisy = ({pricing}) => {
    const {name,id,features,price} = pricing
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body bg-amber-200 flex flex-col">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <div className="flex justify-between h-12">
      <h2 className="text-2xl font-bold">{name}</h2>
      <span className="text-xl">{price}</span>
    </div>
    <ul className="mt-6 flex flex-col flex-1 gap-2 text-xs">
        {
            features.map((feature , index) => <li key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>{feature}</span>
              </li>)
        }
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>
        </div>
    );
}

export default Daisy;
import React from 'react';
import Header from '../components/Header';

const View = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col mx-5">
        <div className="grid grid-cols-2 items-center h-screen">
          <img
            width={'350px'}
            height={'250px'}
            src="https://img.freepik.com/free-psd/3d-rendering-delivery-icon_23-2151454210.jpg?semt=ais_hybrid"
            alt=""
          />
          <h3 className="font-bold">PID : id</h3>
          <h1 className="text-5xl font-bold">Title </h1>
          <h4 className="font-bold text-red-600 text-2xl">$ 250</h4>
          <h4>Brand : </h4>
          <h4>Category : </h4>
          <p>
            <span className="font-bold">description</span> : Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Cum ipsum corrupti
            dignissimos suscipit et esse possimus iusto omnis illum magni?
          </p>
          <div className="flex justify-between mt-5">
            <button className="text-white bg-blue-600 rounded p-2">ADD TO WISHLIST</button>
            <button className="bg-green-600 text-white rounded p-2">ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;

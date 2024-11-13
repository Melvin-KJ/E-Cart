import React from 'react';
import Header from '../components/Header';

const Cart = () => {
  return (
    <>
      <Header />
      <div className="px-5" style={{ paddingTop: '100px' }}>
        <>
          <h1 className="text-5xl font-bold text-blue-600">Cart Summary</h1>
          <div className="grid grid-cols-3 gap-4 rounded p-5 shadow">
            <div className="col-span-2 border rounded p-5 shadow">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <td className="font-semibold">#</td>
                    <td className="font-semibold">Name</td>
                    <td className="font-semibold">Image</td>
                    <td className="font-semibold">Quantitiy</td>
                    <td className="font-semibold">Price</td>
                    <td className="font-semibold">...</td>
                  </tr>
                </thead>
                <tbody>
                  <td>1</td>
                  <td>Product name</td>
                  <td>
                    <img
                      width={'70px'}
                      height={'70px'}
                      src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                  </td>
                  <td>
                    <div className="flex">
                      <button className="font-bold">-</button>
                      <input
                        type="text"
                        style={{ width: '40px' }}
                        className="border p-1 mx-2 rounded"
                        value={12}
                        readOnly
                      />
                      <button className="font-bold">+</button>
                    </div>
                  </td>
                  <td>$ 250</td>
                  <td>
                    <button className="text-red-600">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tbody>
              </table>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Cart;

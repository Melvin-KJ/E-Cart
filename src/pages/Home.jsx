import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container px-4 mx-auto" style={{ paddingTop: '100px' }}>
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded border p-2 shadow">
            <img
              width={'100%'}
              height={'100%'}
              src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className='text-center'>
              <h3 className='text-xl font-bold'>Pink Lipstick</h3>
              <Link to={'/id/view'} className="bg-violet-600 rounded p-1 mt-3 text-white inline-block">View More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
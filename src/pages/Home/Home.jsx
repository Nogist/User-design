import React from 'react';
import Navbar from './../../components/Navbar'
import Designer from './Designer'
import Header from './Header';
import './home.scss';
import UserDetails from './UserDetails';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Header />
      <div className='home__designer'>
        <Designer />
      </div>
      <div className='home__userdetails'>
        <UserDetails />
      </div>
      <div className='home__gallery'>
        
      </div>
      
    </div>
  )
}

export default Home
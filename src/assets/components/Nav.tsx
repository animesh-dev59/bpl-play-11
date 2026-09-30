import React, { useState } from 'react';
import Logo from '../logo.png'
import { FaCommentDollar } from 'react-icons/fa';

const Nav = ({coin}:{coin:number}) => {
  
  return (
    <nav className='   bg-red-100'> 
   <div className='container items-center  mx-auto flex justify-between'> 
     <img src={Logo} alt="" />
    <ul className='flex items-center gap-4'> 
      <li><a href="#">Home</a></li>
      <li><a href="#">Fixture</a></li>
      <li><a href="#">Players</a></li>
      <li><a href="#">Schedule</a></li>
    </ul>
    <strong className='font-bold text-3xl text-yellow-500 flex gap-3 justify-center items-center'>{coin} <FaCommentDollar/></strong>
    
   </div>
  </nav>
  );
};

export default Nav;
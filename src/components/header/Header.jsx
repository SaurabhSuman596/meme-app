import React from 'react';
import './Header.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="header">
      <div className="headwrapper">
        <div className="header__1Sec">
          <img
            src="https://img.favpng.com/0/10/13/donald-trump-clip-art-portable-network-graphics-image-funny-face-png-favpng-mzf7vZcrLtceXBCyG0YQ788AL.jpg"
            alt=""
          />
          <div className="headerCat">
            <p>Actions </p>
            <p>Entertainment</p>
            <p>Gaming</p>
            <p>Holiday</p>
            <p>Music</p>
          </div>
          <button>HAHA!</button>
        </div>
        <div className="header__2Sec">
          <input type="text" placeholder="not an input box!" disabled />
          <AiOutlineSearch className="headerSearchIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;

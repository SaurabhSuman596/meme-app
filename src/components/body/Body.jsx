import React, { useEffect, useState } from 'react';
import Meam from '../meam/Meam';
import { GetAllPost } from '../../apicall';
import './Body.css';

const Body = () => {
  const [meme, setMeme] = useState([]);
  useEffect(() => {
    GetAllPost(setMeme);
  }, []);
  return (
    <div>
      {meme.length > 0 ? (
        meme.map((item, i) => <Meam key={i} item={item} />)
      ) : (
        <p>Loading...</p>
      )}
      <p className="refresh">Refresh the page for more meams!!!!</p>
    </div>
  );
};

export default Body;

import React, { useState } from 'react';
import './Meam.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Share from '../share/Share';

const Meam = ({ item }) => {
  const [url, setUrl] = useState(false);
  const hadleShareClcik = () => {
    setUrl(true);
    setTimeout(() => setUrl(false), 5000);
  };

  return (
    <div>
      <div className="meamWrappe">
        <p>{item.author}</p>
        <LazyLoadImage src={item.url} alt="" />
        <div className="meam__bottom">
          <button onClick={hadleShareClcik}>Share</button>
        </div>
      </div>
      {url && <Share url={item.url} setUrl={setUrl} />}
    </div>
  );
};

export default Meam;

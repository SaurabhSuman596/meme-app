import { useRef, useState } from 'react';
import './Share.css';
import { MdOutlineClear } from 'react-icons/md';

const Share = ({ url, setUrl }) => {
  const [click, setClick] = useState(false);
  const urlRef = useRef('');

  const handleClick = () => {
    setClick(!click);
    navigator.clipboard.writeText(urlRef.current.textContent);
  };

  if (click) {
    setTimeout(() => setClick(false), 3000);
  }

  return (
    <>
      <div className="share">
        <MdOutlineClear className="shareIcon" onClick={() => setUrl(false)} />
        <div onClick={handleClick} value={url} ref={urlRef}>
          {url}
        </div>
        {click && <p>Url Copied</p>}
      </div>
      <div className="outside" onClick={() => setUrl(false)}></div>
    </>
  );
};

export default Share;

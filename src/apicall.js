import axios from 'axios';

export const GetAllPost = async function (setMeme) {
  let res = await axios.get('https://meme-api.herokuapp.com/gimme/50');
  return setMeme(res.data.memes);
};

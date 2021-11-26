import './App.css';
import Navbar from './components/Navbar/Navbar';
import Button from './Asset/Button/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
const App = () => {
  const [setUser] = useState({});
  const [temp, settemp] = useState([]);
  const getUser = async () => {
    let randomNumber = Math.floor(Math.random() * 10);
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?query=london&client_id=${process.env.REACT_APP_CLIENT_ID}`
    );
    // https://api.unsplash.com/photos/random/?
    console.log('data>>>', res.data.results[randomNumber]);
    settemp(res.data.results[randomNumber]);
    console.log('data>>>', res.data);
  };
  useEffect(() => {
    console.log('...>>>', process.env.REACT_APP_CLIENT_ID);
    getUser();
  }, []);
  console.log('<<<get', temp);
  return (
    <div className='App'>
      <Navbar />
      <Button />
    </div>
  );
};

export default App;

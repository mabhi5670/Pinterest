import './App.css';
import Navbar from './components/Navbar/Navbar';
import Button from './Asset/Button/Button';
import { useState } from 'react';
import axios from 'axios';
const App = () => {
  const [setUser] = useState({});

  const getUser = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/photos/random/?&client_id=${process.env.Client_ID}`
    );
    console.log('data>>>', res);
    setUser(res);
    console.log('data>>>', res);
  };

  console.log('<<<get', getUser);
  return (
    <div className='App'>
      <Navbar />
      <Button />
    </div>
  );
};

export default App;

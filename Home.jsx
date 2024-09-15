import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate('/chat');
  };

  const handleFaqClick = () => {
    navigate('/faq');
  };

  const handleTranslatorClick = () => {
    navigate('/translator');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <div className="home-container">
        <h1 style={{color:'white',margin:"0px"}}>Fruit.ai</h1>
        <h3 style={{color:'white'}}>"Be Healthy!"</h3>
        <br/>
      <div className="grid-container">
        <div className="box" onClick={handleChatClick} style={{background: "#ea9ab2"}}>
          <h2>Chat.</h2>
        </div>
        <div className="box" onClick={handleTranslatorClick} style={{background: "#79addc"}}>
          <i class="fa-solid fa-language"></i>
        </div>
        <div className="box" onClick={handleFaqClick} style={{background: "#aaf683"}}>
          <h2>FAQs</h2>
        </div>
        <div className="box" onClick={handleAboutClick} style={{background: "#b79ced"}}>
          <h2>About</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
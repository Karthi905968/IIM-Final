import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';
import New from './components/new';
import Marquee from './components/Marquee';
import VideoComponent from './components/VideoComponent';
import News from './components/News';
import Programs from './components/Programs';

function App() {
  return (
    <div>
      <Header/>
      <New/>
      <VideoComponent/>
      <Marquee/>
      <News/>
      <Programs/>
    </div>
  );
}

export default App;


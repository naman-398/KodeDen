import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import Whatis from './components/Whatis';
import Fromconfused from './components/Fromconfused';
import Areyou from './components/Areyou';
import Ourgurantted from './components/Ourgurantted';
import Whoarewe from './components/Whoarewe';
import Slidersection from './components/Slidersection';
import { Instagram, Linkedin2, Telegram, Twitter } from './icon/Icon';
import { useEffect } from 'react';
import Loader from './components/Loader';
import Backtotop from './components/Backtotop';
function App() {
  useEffect(() => {
    AOS.init(
      {once: true,
      duration: 1500,}
    );
  }, [])
  return (
    <div className=' bg-page-black overflow-hidden position-relative'>
      <div className=' d-flex flex-column socialmedia bg-white position-fixed'>
        <a href='https://twitter.com/login?lang=en' target='_blank'><Twitter/></a>
        <a href='https://www.instagram.com/' target='_blank'><Instagram/></a>
        <a href='https://telegram.org/' target='_blank'><Telegram/></a>
        <a href='https://www.linkedin.com/feed/' target='_blank'><Linkedin2/></a>
      </div>
      <Loader/>
      <Backtotop/>
      <Header/>
      <Whatis/>
      <Fromconfused/>
      <Areyou/>
      <Slidersection/>
      <Ourgurantted/>
      <Whoarewe/>
    </div>
  );
}

export default App;

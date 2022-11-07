import { useState } from 'react';
import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Reviews from './Components/Reviews';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <div className="App main font-frau">
      <div className={width <= 768 ? 'w-full h-screen bg-blueOrangeMobile bg-cover bg-no-repeat bg-top' : 'w-full h-screen bg-blueOrangeDesktop bg-cover bg-center bg-no-repeat'}>
        <Menu pWidth={width} sWidth={setWidth}/> 
        <Header/>   
      </div>
      <Content pWidth={width} sWidth={setWidth}/>  
      <Reviews/>
      <Gallery pWidth={width} sWidth={setWidth}/>
      <Footer/>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Menu from './components/Menu';
import Reviews from './components/Reviews';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <div className="App font-frau">
      <Menu pWidth={width} sWidth={setWidth}/> 
      <Header/>   
      <Content pWidth={width} sWidth={setWidth}/>  
      <Reviews/>
    </div>
  );
}

export default App;

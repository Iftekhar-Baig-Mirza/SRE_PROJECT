import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Page1 from './Pages/Page1';
import Page2 from "./Pages/Page2";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {FloatButton} from "antd";
import {MessageFilled} from "@ant-design/icons";
import {AiOutlineWhatsApp,AiOutlineMessage,} from "react-icons/ai";
import BuyAsset from './components/BuyAsset';
import SellAssest from './components/SellAssest'
function App() {
  return (
    <Router>
    <div className="float1">
    <FloatButton.Group className='float1' icon={<MessageFilled/>} style={{right:50}} trigger="hover">
        <FloatButton icon={<AiOutlineWhatsApp/>} shape="circle" tooltip="Connect on whatsapp"/>
        <FloatButton icon={<AiOutlineMessage/>} shape="circle" tooltip="Message us"/>
    </FloatButton.Group>
    </div>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Page1 />}/>
      <Route path="/predict" element={<Page2/>}/>
      <Route path='/buyasset' element={<BuyAsset/>}/>
      <Route path='/sellasset' element={<SellAssest/>}/>
    </Routes>
    </Router>
  );
}

export default App;

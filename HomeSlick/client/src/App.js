import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Main from './view/Main';
import Detail from './components/Detail';
import Update from './components/Update';
import HouseForm from './components/HouseForm';
import HouseList from './components/HouseList';
import ContactPage from './components/ContactPage';
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
            <Routes>
              <Route path="/" element={<HouseList/>} default /> {/*adding the default makes this the default path*/}
              <Route path="/houses/new" element={<HouseForm/>} /> 
              <Route path="/houses/:id" element={<Detail/>} />
              <Route path="/houses/edit/:id" element={<Update/>} />
              <Route path="/houses/contact/:id" element={<ContactPage/>} />
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

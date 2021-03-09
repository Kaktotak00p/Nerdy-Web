import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainContent from "./MainContent.js";
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <MainContent />
  </BrowserRouter>,
  document.getElementById('main')
);




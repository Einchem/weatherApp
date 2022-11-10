import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Favorite from './pages/Favorite';
import { CardProvider } from "./context/CardContext"



const rootNode = document.getElementById('root');
ReactDOM.render(
  <CardProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Favorite' element={<Favorite />} />
      </Routes>
    </BrowserRouter>
  </CardProvider>,
  rootNode
)


reportWebVitals();

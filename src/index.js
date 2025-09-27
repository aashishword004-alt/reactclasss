import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Component } from 'react';
class Hello extends Component{
  render()
  {
    return(<>hello word</>)
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello/>);


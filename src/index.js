import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { Route } from 'react-router-dom';

class Hello extends Component{
  render()
  {
    return(<>hello</>)
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello />);

import React from 'react';
import './App.css';
import { Header } from './Components/Page/Header/Header';
import { Body } from './Components/Page/Body/Body';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  )
}

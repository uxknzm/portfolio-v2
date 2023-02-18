import React from 'react';
import s from './App.module.css'
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className={s.App}>
      <Header/>
      <Content />
    </div>
  );
}

export default App;

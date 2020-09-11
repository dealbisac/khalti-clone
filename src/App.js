import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
// import Content from './Content';
// import Wallet from './Wallet';



function App() {
  return (
    <div className="app">
      <Header />

      {/* Sidebar Menu */}
      <Sidebar />

      {/* Main Content Box */}
      {/* <Content /> */}

      {/* Wallet and Info */}
      {/* <Wallet /> */}
    </div>
  );
}

export default App;

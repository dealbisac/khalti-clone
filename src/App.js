import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Wallet from './Wallet';



function App() {
  return (
    <div className="app">
      <Header />

      <div className="app_main">
        {/* Sidebar Menu */}
        <Sidebar />

        {/* Main Content Box */}
        <Content />

        {/* Wallet and Info */}
        <Wallet />

      </div>
    </div>
  );
}

export default App;

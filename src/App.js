import React from 'react';
import './App.css';
import LoyaltyCard from './components/LoyaltyCard';
import UserProfile from './components/UserProfile';
import RewardsList from './components/RewardsList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <LoyaltyCard />
        <div style={{ borderBottom: '0.5px solid #000000', margin: '5px 0' }}></div>
        <RewardsList />
        <UserProfile />
      </main>
    </div>
  );
}

export default App;

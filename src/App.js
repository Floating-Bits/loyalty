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
        <RewardsList />
        <UserProfile />
      </main>
    </div>
  );
}

export default App;

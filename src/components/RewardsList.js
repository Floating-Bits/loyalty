import React from 'react';
import './RewardsList.css';

const rewards = [
  { id: 1, name: 'Free 16oz Drink', points: 50, available: true, image: 'https://15minutenrezepte.de/wp-content/uploads/2023/05/Clubsandwich-mit-cheddar-und-schinken-udn-tomaten.jpg' },
  { id: 2, name: 'Discount Voucher', points: 100, available: true, image: 'https://www.cuisini-blog.de/wp-content/uploads/2024/02/club-sandwich-das-beste-rezept-8.webp' },
  { id: 3, name: 'Gift Card', points: 200, available: true, image: 'https://leckereideen.com/wp-content/uploads/2023/07/New-York-Club-Sandwich4.jpg' }
];

const RewardsList = () => {
  return (
    <div className="rewards-list">
      <h2>Rewards</h2>
      <div className="rewards-container">
        {rewards.map(reward => (
          <div key={reward.id} className={`reward-item ${reward.available ? 'available' : ''}`} style={{ backgroundImage: `url(${reward.image})` }}>
            <div className="reward-content">
              <span>{reward.name}</span>
              <span>{reward.points} points</span>
              {reward.available && <button className="btn-claim">Claim now</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RewardsList;

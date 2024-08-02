import React from 'react';
import './LoyaltyCard.css';

const LoyaltyCard = () => {
  return (
    <div className="loyalty-card">
      <div className="card-content">
        <h2>Level 2</h2>
        <p>72 / 95 points to Level 3</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: '76%' }}></div>
        </div>
        <div className="card-buttons">
          <button className="btn btn-open">Open Box</button>
          <button className="btn btn-upgrade">Upgrade</button>
        </div>
      </div>
    </div>
  );
}

export default LoyaltyCard;

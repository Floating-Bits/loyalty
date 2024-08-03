import React, { useState } from 'react';
import './LoyaltyCard.css';

const LoyaltyCard = () => {
  // State variables
  const [level, setLevel] = useState(2);
  const [points, setPoints] = useState(72);
  const [pointsToNextLevel, setPointsToNextLevel] = useState(95);

  // Calculate progress percentage
  const progressPercentage = (points / pointsToNextLevel) * 100;

  // Function to handle upgrade
  const handleUpgrade = () => {
    const newPoints = points + 10; // Increase points by 5 (you can adjust this value)
    setPoints(newPoints);

    // Check if we should level up
    if (newPoints >= pointsToNextLevel) {
      setLevel(level + 1);
      setPoints(newPoints - pointsToNextLevel);
      setPointsToNextLevel(Math.round(pointsToNextLevel * 1.5)); // Increase points needed for next level
    }
  };

  return (
    <div className="loyalty-card">
      <div className="card-content">
        <h2>Level {level}</h2>
        <p>{points} / {pointsToNextLevel} points to Level {level + 1}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <div className="card-buttons">
          <button className="btn btn-open">Open Box</button>
          <button className="btn btn-upgrade" onClick={handleUpgrade}>Upgrade</button>
        </div>
      </div>
    </div>
  );
}

export default LoyaltyCard;
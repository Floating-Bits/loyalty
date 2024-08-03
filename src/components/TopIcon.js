import React, { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './TopIcon.css';

export default function TopIcon() {
  return (
    <div className="spline-container">
      <Spline 
        scene="https://prod.spline.design/ZummfpKhEPGuY5Yc/scene.splinecode" 
        style={{ height: '100%', width: '100%' }} 
      />
    </div>
  );
}
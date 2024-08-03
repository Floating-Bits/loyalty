import React, { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import * as THREE from 'three';
import './TopIcon.css';

export default function TopIcon() {
  const splineRef = useRef();

  const onLoad = (splineApp) => {
    splineRef.current = splineApp;
  };

  useEffect(() => {
    const setupScene = () => {
      if (splineRef.current) {
        const app = splineRef.current;
        
        // Set the background color to black
        if (app.scene) {
          app.scene.background = new THREE.Color(0x000000); // Black color in hex
        }

        // Disable zooming
        if (app.orbitControls) {
          app.orbitControls.enableZoom = false;
          app.orbitControls.mouseButtons.RIGHT = null; // Disable right-click pan
          app.orbitControls.touches.TWO = null; // Disable two-finger touch zoom
        }
        
        // Ensure zoom is set to 1
        app.setZoom(1);

        // Prevent mouse wheel zoom
        const preventZoom = (e) => e.preventDefault();
        window.addEventListener('wheel', preventZoom, { passive: false });

        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener('wheel', preventZoom);
        };
      }
    };

    // Set up an interval to check for the Spline app
    const intervalId = setInterval(() => {
      if (splineRef.current) {
        setupScene();
        clearInterval(intervalId);
      }
    }, 100);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="spline-container">
      <Spline 
        scene="https://prod.spline.design/ZummfpKhEPGuY5Yc/scene.splinecode" 
        onLoad={onLoad}
        style={{ height: '100%', width: '100%' }} 
      />
    </div>
  );
}
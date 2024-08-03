import Spline from '@splinetool/react-spline';
import './CabinView.css';

export default function Home() {
  return (
    <div className="spline-container">
      <Spline 
        scene="https://prod.spline.design/Mz2bYVWxeP0xZocF/scene.splinecode" 
        style={{ height: '100%', width: '100%' }} 
      />
    </div>
  );
}

'use client';
import './Mandala3D.css';

export default function Mandala3D() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Real 3D depth ke liye perspective wrapper add kiya hai */}
      <div className="mandala-perspective">
        <div className="mandala-container">
          <div className="mandala-ring ring1" />
          <div className="mandala-ring ring2" />
          <div className="mandala-ring ring3" />
          {/* Extra luxury layering ke liye ek inner ring */}
          <div className="mandala-ring ring4" />
          <div className="mandala-core">ॐ</div>
        </div>
      </div>
    </div>
  );
}
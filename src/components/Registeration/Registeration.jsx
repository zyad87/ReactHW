import React from 'react';
import './Registeration.css';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';

function Registeration() {
  return (
    <div className="registerationSection">
      <h1 style={{ color: '#4E3797' }}>خطوات التسجيل</h1>
      <div className="iconsContainer">
        <div className="item">
          <div style={{padding:"1.5rem 2rem"}}>
            <img src={icon1} alt="" />
          </div>
          <p>الانضمام إلى المنصة</p>
        </div>
        <div style={{ border: '1.5px dashed black', width: '4rem' }} className='bordergis'></div>
        <div className="item">
        <div style={{padding:"1.5rem 1.8rem"}}>
        <img src={icon2} alt="" />
          </div>
          <p>التسجيل في المعسكر أو البرنامج</p>
        </div>
        <div style={{ border: '1.5px dashed black', width: '4rem', }} className='bordergis'></div>

        <div className="item">
        <div style={{padding:"1.5rem"}}>
        <img src={icon3} alt="" />
          </div>
          <p>انتظار رسالة القبول</p>
        </div>
      </div>
    </div>
  );
}

export default Registeration;

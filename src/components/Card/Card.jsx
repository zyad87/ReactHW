import React from 'react';

import './Card.css';
import locationIcon from '../../assets/location_icon.svg';
import calenderIcon from '../../assets/caleander_icon.svg';

function Card(props) {
  const [day, month, year] = props.date.split('/').map(Number);
  const dateChecker = new Date(year, month - 1, day); // monthIndex is zero-based
  const flagPast = dateChecker >= new Date(2024, 0, 1); // Compare with Jan 1, 2024

  let colorChosen =
    flagPast == false
    ? ['#B1BBCA', 'button-card-inactive'] // إذا كان الحدث قديمًا (رمادي)
    : props.type === 'لقاء'
    ? ['#C084FC', 'button-card'] // لون للقاء (أرجواني)
    : props.type === 'معسكر'
    ? ['#ABADF5', 'button-card2'] // لون للمعسكر (أزرق فاتح)
    : props.type === 'برنامج'
    ? ['#91d8db', 'button-card4'] // لون للبرنامج (أخضر)
    : ['#91D8DB', 'button-card3']; // لون آخر

  return (
    <div
      style={{ color: colorChosen[0], borderColor: colorChosen[0] }}
      className={flagPast == false ? 'program-item-inactive' : 'program-item'}
    >
      <div>
      {props.image && (
        <img
          src={props.image}
          alt={props.title}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginBottom: '10px',
            float:"left"
          }}
        />
      )}
        {/* <p>لقاء</p> */}
        <h3>{props.type}</h3>
        {/* <h3>حوكمة وسرية البيانات في بيئة العمل</h3> */}
        <h3 style={{ color: 'black' ,marginTop:"10px"}}>{props.title}</h3>
      </div>
      <div className="wrapper-down-card">
        <div className="icon-text-container">
          <img src={locationIcon} alt="" />
          {/* <span>الرياض</span> */}
          <span>{props.location}</span>
          <img width="25px" height="30px" src={calenderIcon} alt="" />
          <span>{props.duration}</span>
        </div>
        <div className="down-wrapper">
          <div className="icon-text-container">
            <img width="25px" height="30px" src={locationIcon} alt="" />
            {/* <span>يبدأ في 15/05/2024</span> */}
            <span>يبدأ في {props.date}</span>
          </div>
          {/* <span className="button-card">التفاصيل</span> */}
          <span className={` ${colorChosen[1]}`}>{props.btn}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;

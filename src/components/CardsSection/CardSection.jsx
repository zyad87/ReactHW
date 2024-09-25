import React from 'react';
import './CardSection.css';
import Card from '../Card/Card';
import Btn1 from '../Btn1/Btn1';

function CardSection() {
  return (
    <>
      <div className="cardSectionContainer">
        <div className="cardsContainer">
        <Card
  type="برنامج"
  title="برنامج تطوير الويب"
  location="الرياض"
  date="01/10/2024" // تاريخ بدء البرنامج
  duration="ثلاثة أسابيع" // مدة البرنامج ثلاث أسابيع
  btn="التفاصيل"
/>



               <Card
        type="معسكر"
        title="هندسة الحوسبة السحابية المتقدمة AWS"
        location="الرياض"
        date="15/05/2024"
        duration="4 اسابيع"
        btn="التفاصيل"
      />
      <Card
  type="لقاء"
  title=" React لقاء"
  location="الرياض"
  date="15/05/2024" // تاريخ اللقاء
  duration="يوم"
  btn="التفاصيل"
        image="https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png"
      />
     <Card
  type="لقاء"
  title="لقاء حول تقنيات الذكاء الاصطناعي"
  location="الرياض"
  date="25/09/2020"
  duration="يوم"
  btn="التفاصيل"
/>

<Card
  type="معسكر"
  title="معسكر تطوير التطبيقات باستخدام React"
  location="الرياض"
  date="01/10/2020"
  duration="أربعة أسابيع"
  btn="التفاصيل"
/>

<Card
  type="لقاء"
  title="لقاء حول الأمن السيبراني"
  location="الرياض"
  date="10/10/2020"
  duration="يوم واحد"
  btn="التفاصيل"
/>


        </div>
      </div>
      <Btn1 name="تحميل المزيد" />
    </>
  );
}

export default CardSection;

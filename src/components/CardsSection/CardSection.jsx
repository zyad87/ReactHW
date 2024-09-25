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
        image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAzCAMAAAD1nzvvAAAAWlBMVEX///8Adp8IfqQAeaEAeKAAdJ4Ae6IAcZz5+/zb5+3J3OWoxtXN3ubn7/NhnrnB1uHw9fh2qMCbvtBRlrQ7jK0hg6eGssevy9mOt8q60d0viKptpL1EkK9+rcStpv5CAAADXUlEQVRIia1W15ajMAy1rGIMBBJTQ5L//80VpmYCM7N7Vi8JMteoXBVj/pckPr981V28T36AXQpWwaLcVGWBo674uG4vd0YEABJo7jOsYSEA1fP9HOed5T73aW9B+Hk15lqxgO1Tn/dsnT8FDhYuy4cUWpb6tWa2+gJ2OMOlDN36ENgCWA6rogNOT4AvlL3dYC3srRN8nQAbvO2eClEpdoobntnqKNvhAB4PgB0yI3eMuzJs6bsBKaYg2Iwoga+HwAtv3geWavytZAtPCnxMggvDAkyd1CZRMbW49Cfg1dFoauK7XqxtRCkE0lgrfRepWpI7NtU4DGk7AANaQYIohGJRVcMrDXgSHNPoK8pVspaqNmRZ12VZaCvUZ1I92uYIlfSgBrI8uo6mwCxSCXVZIaxGQ/9RXkGNookpT3kP+5Xt00Qm6Ss7Do5yUU67IhArMAPO3g5NxqAazxQKpwW3C61Gn5+K0SOTHFRBLZAYvVbRT97yY3Itw27ypjYtLXWXh5BP/7zDVtHR804Lc1ZfYamCDJzX8EzWD0zEw2SXdg/vYPJAfZ1jcENertDI2YkeiWiMNY4Sw3iJB3PIcp6qKOGtziqxMrG6JRuF2ulyPVhz9EIer1MKruV6h/mDSoZZpqTrJ2FtVn4idQluzWoC8pz+4ALEZAvs8paL9Zf/yxfz6KNsPtoTHx9qwerjTaKPu6jqvc1ZVJeDLaomoTWPmnzt/1Nqakfk6ikFMY+05nFxV5njsikbtek35mTZyhzqF+ZkbmVORIJyNYlcxU+uDoKRq4lyFXa4kV9bdXQAX6sDxg6/VMfw3niyschtjNJnPcbkeraIRF8u1RAFHDsAFlmHMwtmeQouHQDD4YDVrMF4qdJl7Tn9a+45emTtEUqFMeRtDUz6iixdTs3QhgF1mwfkY9zaV+9hpJpC9Yaxr4b7931118nzuZOP5F6j/5sRsJ8daxjPR8B+Wr3itKoItmGq9Xc2At7nIxUF0W/moxneJzKK4O8m8j/vAPl+6+jduHW4flV0xPkRKtpqly5ytyScprrn2PtqwOmeM25Wrs192aKuR9WyWUlb+rx1321WpnQy7nIovCxU5cCzypXnOCXBA5idPHY7VFqIYwePb7dHM1LVf6T56n9C/YX8AQIJJ76xZElCAAAAAElFTkSuQmCC"
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

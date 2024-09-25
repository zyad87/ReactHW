import './App.css';
import NavBar from './components/NavBar/NavBar';
import BootCampToggler from './components/BootCampToggler/BootCampToggler';
import CardSection from './components/CardsSection/CardSection';
import Registeration from './components/Registeration/Registeration';
import FooterSection from './components/FooterSection/FooterSection';

function App() {
  return (
    <>
      <NavBar />
      <h1 style={{
  color: 'white',
  textAlign: 'right',
  fontSize: '2.5rem',
  fontFamily: 'Tajawal, sans-serif',
  padding: '1rem',
  margin: '0',
  backgroundColor: '#4E3797',
}}>
  أكاديمية طويق
</h1>
      <BootCampToggler />
      <CardSection />
      <Registeration />
      <FooterSection />
    </>
  );
}

export default App;

import './App.css'
import Header from './components/LandingPage/Header/Header';
import Section1 from './components/LandingPage/Section1/Section1';
import Section2 from './components/LandingPage/Section2/Section2';
import Section3 from './components/LandingPage/Section3/Section3';
import Section4 from './components/LandingPage/Section4/Section4';
import Footer from './components/LandingPage/Footer/Footer';



function App() {
  return (
   
    <div className="App">
      
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
      </div>
  );
}

export default App;

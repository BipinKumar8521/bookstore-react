import './App.css';
import BestSelling from './components/best-selling/BestSelling';
import Footer from './components/footer/Footer';
import IntroSection from './components/intro-section/IntroSection';
import Navbar from './components/navbar/Navbar';
import Recommendation from './components/recommendation/Recommendation';
import Reviews from './components/reviews/Reviews';

function App() {


  return (
    <>
     <Navbar/>
     <IntroSection/>
     <BestSelling/>
     <Recommendation/>
     <Reviews/>
     <Footer/>
    </>

  );
}

export default App;

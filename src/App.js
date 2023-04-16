import { useEffect, useState } from 'react';
import './App.css';
import BestSelling from './components/best-selling/BestSelling';
import Footer from './components/footer/Footer';
import IntroSection from './components/intro-section/IntroSection';
import Navbar from './components/navbar/Navbar';
import Recommendation from './components/recommendation/Recommendation';
import ReviewForm from './components/reviews/ReviewForm';
import Reviews from './components/reviews/Reviews';

function App() {
  const[gotop, setGotop]= useState(false);
useEffect(()=>{
  const handleScroll = (event) => {
 if(window.scrollY>100){
  setGotop(true)
 }
 else{
  setGotop(false)
 }
};

window.addEventListener('scroll', handleScroll);

return () => {
    window.removeEventListener('scroll', handleScroll);
};
},[])

  

  return (
    <>
     <Navbar/>
     <IntroSection/>
     <BestSelling/>
     <Recommendation/>
     <Reviews/>
     <ReviewForm/>
     <Footer/>
     <a href="#" className={gotop? "go-top active": "go-top"} >
      <i class="fas fa-chevron-up"></i>
    </a>

    </>

  );
}

export default App;

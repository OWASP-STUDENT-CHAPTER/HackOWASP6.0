// import logo from './logo.svg';
import styles from './App.module.css';
// import MySVGComponent from './pages/Landingpage/landingpage2';
import Navbar from './components/Navbar';
import ScrollSpyNavigation from './components/ScrollNavigation/ScrollNavigation';
import AboutUs from './pages/AboutusPage/aboutus';
import LandingPage from './pages/Landingpage/landingpage';
import Footer from './components/footer/Footer';
// import { Link } from "react-scroll";

function App() {
  return (
    <div className={styles.App}>
<<<<<<< HEAD
      <ScrollSpyNavigation />
=======
      <Navbar />
      <LandingPage id="landingpage" />
      <AboutUs id="aboutus"/>
      <Footer />
>>>>>>> 2f6a37608c400cf15d664a67aa6dd72eda5ed28b
    </div>
  );
}

export default App;

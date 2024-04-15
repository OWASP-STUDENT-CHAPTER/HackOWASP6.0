// import logo from './logo.svg';
import styles from './App.module.css';
// import MySVGComponent from './pages/Landingpage/landingpage2';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutusPage/aboutus';
import LandingPage from './pages/Landingpage/landingpage';
import Footer from './components/footer/Footer';
// import { Link } from "react-scroll";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <LandingPage id="landingpage" />
      <AboutUs id="aboutus"/>
      <Footer />
    </div>
  );
}

export default App;

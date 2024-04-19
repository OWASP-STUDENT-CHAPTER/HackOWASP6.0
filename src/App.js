// import logo from './logo.svg';
import styles from './App.module.css';
import ScrollSpyNavigation from './components/ScrollNavigation/ScrollNavigation';
import Footer from './components/footer/Footer';
// import { Link } from "react-scroll";
import StarrySky from './components/landingpage/starfieldbg';

function App() {
  return (
    <div className={styles.App}>
      <ScrollSpyNavigation />
      <StarrySky />
      {/* <br /> */}
      <Footer />
    </div>
  );
}

export default App;

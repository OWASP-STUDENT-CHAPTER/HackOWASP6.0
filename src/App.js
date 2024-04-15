// import logo from './logo.svg';
import styles from './App.module.css';
import ScrollSpyNavigation from './components/ScrollNavigation/ScrollNavigation';
import Footer from './components/footer/Footer';
// import { Link } from "react-scroll";

function App() {
  return (
    <div className={styles.App}>
      <ScrollSpyNavigation />
      {/* <br /> */}
      <Footer />
    </div>
  );
}

export default App;

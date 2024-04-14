// import logo from './logo.svg';
import styles from './App.module.css';
// import MySVGComponent from './pages/Landingpage/landingpage2';
import Navbar from './components/Navbar';
import LandingPage from './pages/Landingpage/landingpage';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;

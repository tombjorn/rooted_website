// src/App.js
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Enquire from './components/Enquire/Enquire';
import FAQ from './components/FAQ/FAQ';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Cardo' rel='stylesheet'></link>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

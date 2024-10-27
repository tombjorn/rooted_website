// import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Enquire from './components/Enquire/Enquire';
import FAQ from './components/FAQ/FAQ';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <link href='https://fonts.googleapis.com/css?family=Cardo' rel='stylesheet'></link>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/Enquire" element={<Enquire/>}/>
          <Route path="/FAQ" element={<FAQ/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Enquire from './components/Enquire/Enquire';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <link href='https://fonts.googleapis.com/css?family=Cardo' rel='stylesheet'></link>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/Enquire" element={<Enquire/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;

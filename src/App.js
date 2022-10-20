import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { Success } from './components/Success';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/application_submit_successful" element={<Success />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

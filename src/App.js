
import './App.css';
import Signup from './components/Contactus/Signup';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Contact from './components/Contactus/Contact';
import About from './components/Contactus/About';
function App() {
  return (
    <>
    <Router>
      {/* <Navbar /> */}

      <div className="pages">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/contact" element={< Contact/>} />
          <Route path="/about" element={< About/>} />

          {/* <Route path="/History" element={<History />} /> */}
        </Routes>
      </div>
    </Router>
    {/* <BackgroundAnimate/> */}
</>
  );
}

export default App;

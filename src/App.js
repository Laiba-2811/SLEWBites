
import './App.css';
import Signup from './components/Contactus/Signup';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Contact from './components/Contactus/Contact';
import About from './components/Contactus/About';
import Login from './components/Login';
function App() {
  return (
    <>
    <Router>
      {/* <Navbar /> */}

      <div className="pages">
        <Routes>
          {/* <Route path="/" element={< />} /> */}
          <Route path="/contact" element={< Contact/>} />
          <Route path="/about" element={< About/>} />
          <Route path="/login" element={< Login/>} />
          <Route path="/Signup" element={< Signup/>} />

          {/* <Route path="/History" element={<History />} /> */}
        </Routes>
      </div>
    </Router>
    {/* <BackgroundAnimate/> */}
</>
  );
}

export default App;

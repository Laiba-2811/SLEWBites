
import './App.css';
import Signup from './components/Contactus/Signup';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      {/* <Navbar /> */}

      <div className="pages">
        <Routes>
          <Route path="/" element={<Signup />} />
          {/* <Route path="/History" element={<History />} /> */}
        </Routes>
      </div>
    </Router>
    {/* <BackgroundAnimate/> */}
</>
  );
}

export default App;

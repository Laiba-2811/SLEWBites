import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import ShoppingCart from './Pages/ShoppingCart';
// import AboutUs from './Pages/AboutUs';
import AdminPannel from './Components/AdminPanel';


function App() {
  return (
    <>
    <div>
    {/* <h1>SLEWBites</h1> */}
      <AdminPannel />
      {/* <ShoppingCart></ShoppingCart> */}
      {/* <AboutUs></AboutUs> */}
    </div>
    {/* <div> </div> */}
    </>
  );
}

export default App;

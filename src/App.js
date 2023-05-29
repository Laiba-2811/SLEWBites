import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminPannel from './Components/AdminPanel';
import {TopBar} from './Components/TopBar';


function App() {
  return (
    <>
    
      <TopBar/>
      <AdminPannel />
      
  
    </>
  );
}

export default App;

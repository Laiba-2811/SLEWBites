import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import Sidebar from './Sidebar';
import Order from './OrderTable';
import User from './UserTable';
import ProductTable from './ProductTable';
import CategoryTable from './CategoryTable';
import Dashboard from './DashBoard';
// import {TopBar} from './Components/TopBar';


const AdminPannel = () => {
  return(
     <>
            {/* <TopBar/> */}
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path ="/" element =  {<Dashboard/>}/>
          <Route path ="/user" element =  {<User/>}/>
          <Route path="/category"  element =  {<CategoryTable/>}/>
          <Route path='/order'  element =  {<Order/>}/>
          <Route path ='/products' element =  {<ProductTable/>}/>
        </Routes>
      </Sidebar>  
    </BrowserRouter>
    </>
  
  );
}
export default  AdminPannel
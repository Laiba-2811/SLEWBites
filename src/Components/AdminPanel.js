// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import OrderTable from './OrderTable';
// import UserTable from './UserTable';
// import ProductTable from './ProductTable';
// import CategoryTable from './CategoryTable';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState('Order-List');

//   const changeTab = (tab) => {
//     setActiveTab(tab);
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'Order-List':
//         return <OrderTable />;
//       case 'UserList':
//         return <UserTable />;
//       case 'ProductList':
//         return <ProductTable />;
//       case 'Category':
//         return <CategoryTable />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="admin-panel">
//       <h1>Admin Panel</h1>
//       <Container fluid>
//         <Row>
//           <Col sm={3} className="sidebar-col">
//             <Sidebar activeTab={activeTab} changeTab={changeTab} />
//           </Col>
//           <Col sm={9} className="content-col">
//             <div className="content-container">{renderContent()}</div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default AdminPanel;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import Sidebar from './Sidebar';
import Order from './OrderTable';
import User from './UserTable';
import ProductTable from './ProductTable';
import CategoryTable from './CategoryTable';
import DashBoard from './DashBoard';
const AdminPannel = () => {
  return(
 
     
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path ="/" element =  {<DashBoard/>}/>
          <Route path ="/user" element =  {<User/>}/>
          <Route path="/category"  element =  {<CategoryTable/>}/>
          <Route path='/order'  element =  {<Order/>}/>
          <Route path ='/products' element =  {<ProductTable/>}/>
        </Routes>
      </Sidebar>  
    </BrowserRouter>
  
  );
}
export default  AdminPannel
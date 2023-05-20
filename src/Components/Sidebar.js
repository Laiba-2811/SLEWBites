// import React from 'react';
// import { CDBSidebar, CDBSidebarContent, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';

// const Sidebar = ({ activeTab, changeTab }) => {
//   return (
//     <CDBSidebar textColor="#192A56" backgroundColor="rgb(23, 255, 178)">
//       <CDBSidebarContent className="sidebar-content">
//         <CDBSidebarMenu>
//           <CDBSidebarMenuItem
//             active={activeTab === 'Order-List'}
//             onClick={() => changeTab('Order-List')}
//             className="sidebar-menu-item"
//           >
//             Order-List
//           </CDBSidebarMenuItem>
//           <CDBSidebarMenuItem
//             active={activeTab === 'UserList'}
//             onClick={() => changeTab('UserList')}
//             className="sidebar-menu-item"
//           >
//             UserList
//           </CDBSidebarMenuItem>
//           <CDBSidebarMenuItem
//             active={activeTab === 'ProductList'}
//             onClick={() => changeTab('ProductList')}
//             className="sidebar-menu-item"
//           >
//             Product List
//           </CDBSidebarMenuItem>
//           <CDBSidebarMenuItem
//             active={activeTab === 'Category'}
//             onClick={() => changeTab('Category')}
//             className="sidebar-menu-item"
//           >
//             Category
//           </CDBSidebarMenuItem>
//         </CDBSidebarMenu>
//       </CDBSidebarContent>
//     </CDBSidebar>
//   );
// };

// export default Sidebar;
import React, {useState} from "react";
import { FaTh, FaBars , FaUserAlt, FaShoppingBag , FaClipboardList} from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai"
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
  const[isOpen , setIsOpen]= useState(false);
  const toggel = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path:"/",
      name:"DashBoard",
      icon: <FaTh/>

    },
    {
      path:"/user",
      name:"Users",
      icon: <FaUserAlt/>

    },
    {
      path:"/category",
      name:"Category",
      icon: <AiOutlineAppstore />

    },
    {
      path:"/order",
      name:"Orders",
      icon: <FaClipboardList />

    },
    {
      path:"/products",
      name:"Products",
      icon: <FaShoppingBag />

    },

    
]
  return(
    <div className="container">
        <div style={{width: isOpen ? "200px" : "43px" }}className="sidebar">
           <div className="top_section">
             <h1 style={{display: isOpen ? "block" : "none" }} className="logo">Admin</h1>
             <div style={{marginLeft: isOpen? "50px" : "0px" }} className="bars">
                <FaBars onClick={toggel}/>
             </div>

           </div>
            {
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link" activeClassNam = "active">
                <div className="icon">{item.icon}</div>
                <div style={{display: isOpen ? "block" : "none" }} className="Link-text">{item.name}</div>

              </NavLink>
            ))
          }
        </div>
        <main>{children}</main>
    </div>
)
 
}
export default Sidebar
import React, { useState , useEffect } from 'react';
import { Table , Pagination } from 'react-bootstrap';

const UserTable = () => {
  
  const [users, setUsers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  // Calculate pagination indexes
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const url = 'http://localhost:3000/api/users';
  const fetchApiData= async (url)=>{
    try{
      const res= await fetch(url);
      const data = await res.json();
     //  console.log(baseurl, "base");
     setUsers(data)
    } catch(error){
      console.log(error);
    }
     }
    
       useEffect(() => {
       fetchApiData(url);
      
        
      }, [])

      const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
      };

  

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.number}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination>
        {Array.from({ length: Math.ceil(users.length / usersPerPage) }).map((_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default UserTable;

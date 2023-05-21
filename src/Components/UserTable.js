import React, { useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import '../App.css';

const UserTable = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890', address: '123 Street, City' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', phone: '987-654-3210', address: '456 Avenue, Town' },
    { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com', phone: '555-555-5555', address: '789 Road, Village' },
    { id: 4, name: 'Alice Brown', email: 'alicebrown@example.com', phone: '111-222-3333', address: '321 Lane, Suburb' },
    { id: 5, name: 'Sam Wilson', email: 'samwilson@example.com', phone: '444-555-6666', address: '555 Boulevard, County' },
    { id: 6, name: 'Emily Davis', email: 'emilydavis@example.com', phone: '777-888-9999', address: '999 Court, Province' },
    { id: 7, name: 'Michael Lee', email: 'michaellee@example.com', phone: '222-333-4444', address: '444 Terrace, State' },
    { id: 8, name: 'Olivia Clark', email: 'oliviaclark@example.com', phone: '666-777-8888', address: '888 Place, Country' },
    { id: 9, name: 'David Turner', email: 'davidturner@example.com', phone: '999-000-1111', address: '111 Road, Continent' },
    { id: 10, name: 'Sophia Hall', email: 'sophiahall@example.com', phone: '333-444-5555', address: '555 Street, Planet' },
  ];

  const itemsPerPage = 5; // Number of items to display per page

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages based on the number of users and items per page
  const totalPages = Math.ceil(users.length / itemsPerPage);

  // Get the index range of users to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the users based on the current page
  const slicedUsers = users.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {slicedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {totalPages > 1 && (
        <Pagination>
          {/* Previous Page button */}
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          />

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}

          {/* Next Page button */}
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </Pagination>
      )}
    </div>
  );
};

export default UserTable;


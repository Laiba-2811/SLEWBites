
import React, { useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import '../App.css';

const CategoryTable = () => {
  const categories = [
    { id: 1, name: 'Fresh Items' },
    { id: 2, name: 'Baked Items' },
    { id: 3, name: 'Pantry Staples' },
  ];

  const categoryRecords = [
    { id: 1, categoryId: 1, name: 'Apple', price: 1.99, quantity: 50 },
    { id: 2, categoryId: 1, name: 'Banana', price: 0.99, quantity: 100 },
    { id: 3, categoryId: 1, name: 'Orange', price: 1.49, quantity: 75 },
    { id: 1, categoryId: 1, name: 'Apple', price: 1.99, quantity: 50 },
    { id: 2, categoryId: 1, name: 'Banana', price: 0.99, quantity: 100 },
    { id: 3, categoryId: 1, name: 'Orange', price: 1.49, quantity: 75 },
    { id: 1, categoryId: 1, name: 'Apple', price: 1.99, quantity: 50 },
    { id: 2, categoryId: 1, name: 'Banana', price: 0.99, quantity: 100 },
    { id: 3, categoryId: 1, name: 'Orange', price: 1.49, quantity: 75 },
    // Add more records for Fresh Items category
    { id: 4, categoryId: 2, name: 'Bread', price: 2.99, quantity: 30 },
    { id: 5, categoryId: 2, name: 'Cake', price: 12.99, quantity: 10 },
    { id: 6, categoryId: 2, name: 'Cookie', price: 0.99, quantity: 50 },
    { id: 4, categoryId: 2, name: 'Bread', price: 2.99, quantity: 30 },
    { id: 5, categoryId: 2, name: 'Cake', price: 12.99, quantity: 10 },
    { id: 6, categoryId: 2, name: 'Cookie', price: 0.99, quantity: 50 },
    { id: 4, categoryId: 2, name: 'Bread', price: 2.99, quantity: 30 },
    { id: 5, categoryId: 2, name: 'Cake', price: 12.99, quantity: 10 },
    { id: 6, categoryId: 2, name: 'Cookie', price: 0.99, quantity: 50 },
    // Add more records for Baked Items category
    { id: 7, categoryId: 3, name: 'Rice', price: 4.99, quantity: 100 },
    { id: 8, categoryId: 3, name: 'Pasta', price: 2.49, quantity: 80 },
    { id: 9, categoryId: 3, name: 'Canned Beans', price: 1.99, quantity: 60 },
    { id: 7, categoryId: 3, name: 'Rice', price: 4.99, quantity: 100 },
    { id: 8, categoryId: 3, name: 'Pasta', price: 2.49, quantity: 80 },
    { id: 9, categoryId: 3, name: 'Canned Beans', price: 1.99, quantity: 60 },
    // Add more records for Pantry Staples category
    // ...
  ];

  const itemsPerPage = 5; // Number of items to display per page

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages based on the number of records and items per page
  const totalPages = Math.ceil(categoryRecords.length / itemsPerPage);

  // Get the index range of records to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the category records based on the current page
  const slicedRecords = categoryRecords.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className= "table-responsive">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Category ID</th>
          <th>Category Name</th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => {
          const categoryRecordsFiltered = categoryRecords.filter(
            (record) => record.categoryId === category.id
          );

          return (
            <React.Fragment key={category.id}>
              <tr>
                <td rowSpan={categoryRecordsFiltered.length}>{category.id}</td>
                <td rowSpan={categoryRecordsFiltered.length}>{category.name}</td>
                <td>{categoryRecordsFiltered[0].id}</td>
                <td>{categoryRecordsFiltered[0].name}</td>
                <td>{categoryRecordsFiltered[0].price}</td>
                <td>{categoryRecordsFiltered[0].quantity}</td>
              </tr>
              {categoryRecordsFiltered.slice(1).map((record) => (
                <tr key={record.id}>
                  <td>{record.id}</td>
                  <td>{record.name}</td>
                  <td>{record.price}</td>
                  <td>{record.quantity}</td>
                </tr>
              ))}
            </React.Fragment>
          );
        })}
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

export default CategoryTable;

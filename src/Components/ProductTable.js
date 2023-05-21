import React, { useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import '../App.css';

const ProductTable = () => {
  const products = [
   {
  id: 1,
  name: 'Product 1',
  category: 'Category 1',
  price: 10.99,
  availability: 'In Stock',
  quantity:'200',
  image: 'product1.jpg',
},
{
  id: 2,
  name: 'Product 2',
  category: 'Category 2',
  price: 19.99,
  availability: 'Out of Stock',
  quantity:'200',
  image: 'product2.jpg',
},
{
    id: 1,
    name: 'Product 1',
    category: 'Category 1',
    price: 10.99,
    availability: 'In Stock',
    quantity:'200',
    image: 'product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    category: 'Category 2',
    price: 19.99,
    availability: 'Out of Stock',
    quantity:'200',
    image: 'product2.jpg',
  },{
    id: 1,
    name: 'Product 1',
    category: 'Category 1',
    price: 10.99,
    availability: 'In Stock',
    quantity:'200',
    image: 'product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    category: 'Category 2',
    price: 19.99,
    availability: 'Out of Stock',
    quantity:'200',
    image: 'product2.jpg',
  },{
    id: 1,
    name: 'Product 1',
    category: 'Category 1',
    price: 10.99,
    availability: 'In Stock',
    quantity:'200',
    image: 'product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    category: 'Category 2',
    price: 19.99,
    availability: 'Out of Stock',
    quantity:'200',
    image: 'product2.jpg',
  },{
    id: 1,
    name: 'Product 1',
    category: 'Category 1',
    price: 10.99,
    availability: 'In Stock',
    quantity:'200',
    image: 'product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    category: 'Category 2',
    price: 19.99,
    availability: 'Out of Stock',
    quantity:'200',
    image: 'product2.jpg',
  },
  ];

  const itemsPerPage = 5; // Number of items to display per page

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages based on the number of products and items per page
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get the index range of products to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the products based on the current page
  const slicedProducts = products.slice(startIndex, endIndex);

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
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {slicedProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
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

export default ProductTable;


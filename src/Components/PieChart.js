import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const userData = [
    { label: 'User A', value: 30 },
    { label: 'User B', value: 50 },
    { label: 'User C', value: 20 },
    // Add more user data as needed
  ];

  const orderData = [
    { label: 'Order A', value: 40 },
    { label: 'Order B', value: 20 },
    { label: 'Order C', value: 30 },
    // Add more order data as needed
  ];

  const productData = [
    { label: 'Product A', value: 25 },
    { label: 'Product B', value: 35 },
    { label: 'Product C', value: 40 },
    // Add more product data as needed
  ];

  const categoryData = [
    { label: 'Category A', value: 15 },
    { label: 'Category B', value: 45 },
    { label: 'Category C', value: 40 },
    // Add more category data as needed
  ];

  const userDataColors = ['#FF6384', '#36A2EB', '#FFCE56'];
  const orderDataColors = ['#FF6384', '#36A2EB', '#FFCE56'];
  const productDataColors = ['#FF6384', '#36A2EB', '#FFCE56'];
  const categoryDataColors = ['#FF6384', '#36A2EB', '#FFCE56'];

  const userDataPieData = {
    labels: userData.map((data) => data.label),
    datasets: [
      {
        data: userData.map((data) => data.value),
        backgroundColor: userDataColors,
      },
    ],
  };

  const orderDataPieData = {
    labels: orderData.map((data) => data.label),
    datasets: [
      {
        data: orderData.map((data) => data.value),
        backgroundColor: orderDataColors,
      },
    ],
  };

  const productDataPieData = {
    labels: productData.map((data) => data.label),
    datasets: [
      {
        data: productData.map((data) => data.value),
        backgroundColor: productDataColors,
      },
    ],
  };

  const categoryDataPieData = {
    labels: categoryData.map((data) => data.label),
    datasets: [
      {
        data: categoryData.map((data) => data.value),
        backgroundColor: categoryDataColors,
      },
    ],
  };

  return (
    <div>
      <h2>User Data</h2>
      <Pie data={userDataPieData} />
      <h2>Order Data</h2>
      <Pie data={orderDataPieData} />
      <h2>Product Data</h2>
      <Pie data={productDataPieData} />
      <h2>Category Data</h2>
      <Pie data={categoryDataPieData} />
    </div>
  );
};

export default PieChart;

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    MDBCheckbox
    } 
    from "mdb-react-ui-kit";
    import React from "react";
    import './Cart.css';
    import { Link } from "react-router-dom";
    import { ShoppingCart } from "./ProductCatalog";
    import { useState,useEffect } from "react";
export default function QuantityEdit() {
       const currentData=JSON.parse(localStorage.getItem('productData'))||[];
        const [quantity, setQuantity] = useState(1);
        const[cartToOrder, setCartToOrder]=useState([]);
        const[totalPrice, setTotalPrice]=useState(0);
        const [inputph, setInputph] = useState("");
        const [data, setData] = useState(() => {
          return JSON.parse(localStorage.getItem("productData")) || [];
        });
       const handleCheck=(id)=>{
        console.log(id);
         const filteredData= data.filter(d => { if(d._id===id){
          return d;
         }})
        // console.log("filtered",filteredData);
         cartToOrder.push(filteredData);
         //let sum=0;
         //console.log("order",cartToOrder);
         cartToOrder.map((d)=>{
          //console.log(d[0].price);
          //sum+=Number(d[0].price);
          setTotalPrice(totalPrice+d[0].price);
          
         })
         //console.log(sum);
         
        
         console.log(totalPrice);

       }
        const updateQuantity = (index, newQuantity) => {
          const updatedData = [...data];
          updatedData[index].quantity = newQuantity;
          //updatedData[index].price = updatedData[index].price * newQuantity;
          localStorage.setItem("productData", JSON.stringify(updatedData));
          setData(updatedData);
        };
        const updatePrice = (index, newPrice) => {
          const updatedData = [...data];
          updatedData[index].price = newPrice;
          localStorage.setItem("productData", JSON.stringify(updatedData));
          setData(updatedData);
        };
      
        const calculatePrice = (price, quantity) => {
          return price * quantity;
        };
        const removeFromCart = (index) => {
          const updatedData = [...data];
          updatedData.splice(index, 1);
          localStorage.setItem("productData", JSON.stringify(updatedData));
          setData(updatedData);
        };
      const count=currentData.length;

      const handleAddOrder= (e) => {
        e.preventDefault();
        const orderData = cartToOrder.map((d) => {
          const updatedItem = { ...d[0] };
          updatedItem.price = updatedItem.price * updatedItem.quantity;
          return updatedItem;
        });
      
      //  const orderData= cartToOrder.map((d)=>{
      //     d[0].price=d[0].price*d[0].quantity;
      //   })
       //const phoneNo= document.getElementById("phNo");
       //const address=document.getElementById("address")

        console.log(orderData);
        // const { name, description, img } = newCategory;
       const url='http://localhost:3000/api/orders';
        // const requestBody = { name, description, img };
        const postApiData = async (url) => {
          try {
            await fetch(url, {
              method: 'post',
              body: JSON.stringify(orderData),
              headers: {
                'Content-Type': 'application/json',
              },
            });
          } catch (error) {
            console.log(error);
          }
        };
        postApiData(url);
        //fetchApiData(url);
      };
    return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {count} Items
                        </MDBTypography>
                      </div>
    
                      <hr className="my-4" />
                      {data.map((p, index)=>{
                       return(
                        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                          <MDBCheckbox onChange={()=>{
                            handleCheck(p._id)
                          }} name='flexCheck' value='' id='flexCheckDefault' label='Default checkbox' />
                           key={index}
                        <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage
                            src={'./images/' + p.img}
                            fluid className="rounded-3" alt="Cotton T-shirt" />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <MDBTypography tag="h6" className="text-muted">
                           Category: {p.Category.name}
                          </MDBTypography>
                          <MDBTypography tag="h6" className="text-black mb-0">
                            {p.name}
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                          <MDBBtn color="link"
                    className="px-2"
                    onClick={() => {
                      const newQuantity = Math.max(p.quantity - 1, 0);
                      updateQuantity(index, newQuantity);
                    }}>
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>
    
                          <MDBInput onChange={(e) => {
                      const newQuantity = parseInt(e.target.value);
                      updateQuantity(index, newQuantity);
                    }}
                    type="number"
                    min="0"
                    value={p.quantity}
                    size="sm" />
    
                          <MDBBtn color="link"
                    className="px-2"
                    onClick={() => {
                      const newQuantity = p.quantity + 1;
                      updateQuantity(index, newQuantity);
                      
                    }}>
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="text-end">
                          <MDBTypography tag="h6" className="mb-0">
                            € {p.price*p.quantity}
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a href="#!" className="text-muted">
                            <MDBIcon fas icon="times" />
                          </a>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <MDBBtn color="success" className="mt-3" onClick={() => removeFromCart(index)}>Remove</MDBBtn>
                        </MDBCol>
                      <hr className="my-4" />

                      </MDBRow>
                       );          
    })}
    
                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          
                            <Link to="/product-catalog" className="nav-link" id="navItem">
                            <MDBCardText tag="a" href="" className="text-body" >
                            Back to Shopping
                            </MDBCardText>
                           </Link>
                          
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                        Order Placement
                      </MDBTypography>
    
                      <hr className="my-4" />
                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Shipping Charges
                      </MDBTypography>
    
                      <div className="mb-4 pb-2">
                        <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                          <option value="1">Standard-Delivery- $5.00</option>
                          <option value="2">Fast delivery-$10</option>
                        </select>
                      </div>
    
                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Enter your Phone Number:
                      </MDBTypography>
    
                      <div className="mb-5">
                        <MDBInput id="phNo" size="lg" label="Enter your number" />
                      </div>
                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Enter your Address:
                      </MDBTypography>
    
                      <div className="mb-5">
                        <MDBInput id="address" size="lg" label="Enter your Address" />
                      </div>
    
                      <hr className="my-4" />
    
                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">€ {totalPrice}</MDBTypography>
                      </div>
    
                      <MDBBtn color="success" block size="lg" onClick={handleAddOrder}>
                        Order
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
    }
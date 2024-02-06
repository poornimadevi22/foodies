import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderError, setOrderError] = useState(false);

  useEffect(() => {
    // Retrieve cart data from localStorage on component mount
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (title) => {
    const updatedCart = cart.filter((item) => item.title !== title);
    setCart(updatedCart);
    // Save cart data to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total.toFixed(2);
  };

  const submitOrder = async () => {
    try {
      // Replace this URL with your actual endpoint for order submission
      const response = await fetch('http://localhost:3000/order/create', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }),
      });

      if (response.ok) {
        // Order submission successful, you can handle success as needed
        console.log('Order submitted successfully!');
        // Clear the cart after a successful order
        setOrderSubmitted(true);
        
        setTimeout(() => {
          window.location.reload();
          setCart([]);
        localStorage.removeItem('cart');
        }, 3000);
        
      } else {
        setOrderError(true);
        // Handle errors from the server
        console.error('Failed to submit order',response);
        // setTimeout(() => {
        //   window.location.reload();
        // }, 3000);
      }
    } catch (error) {
      setOrderError(true);
      // Handle network or other errors
      console.error('Error during order submission:', error);
      // setTimeout(() => {
      //   window.location.reload();
      // }, 3000);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row>
          <Col xs={12} lg={8}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <Button variant="danger" onClick={() => removeFromCart(item.title)}>
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col xs={12} lg={4}>
            <div className="d-flex justify-content-end">
              <h5>Total: ${calculateTotalPrice()}</h5>
            </div>
         

          <div className="d-flex justify-content-end mt-3">
              <Button variant="success" onClick={submitOrder}>
                Submit Order
              </Button>
            </div>
            </Col>
        </Row>

        
      )}
       {orderSubmitted && (
              <Alert variant="success" className="mt-3">
                Order submitted successfully! Page will reload in a few seconds.
              </Alert>
            )}

            {orderError && (
              <Alert variant="danger" className="mt-3">
                Failed to submit order. Please try again.
              </Alert>
            )}
    </Container>
  );
};

export default CartPage;

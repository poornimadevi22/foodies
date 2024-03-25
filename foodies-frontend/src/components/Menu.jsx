import React, { useState, useEffect } from 'react';
import { data } from '../data.json';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router';
import { Navbar, NavDropdown } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import authService from '../services/authservice';

const Menu = () => {
    const [cart, setCart] = useState([]);
    const [dishData, setFilteredDishes] = useState([]);
    const { filterBy, filter } = useParams();

    useEffect(() => {
      const fetchDishes = async () => {
        try {
          const dishesData = await authService.getAllDish();
          const dishes = dishesData.data;
          setFilteredDishes(dishes);
        } catch (error) {
          console.error('Error fetching dishes:', error);
        }
      };
  
      fetchDishes();
    }, []);
  
    let category=false;
    let tags=false;
    let search=false;
    if(filterBy==='category'){
      category=true
    }else if(filterBy==='dietary'){
      tags=true
    }else if(filterBy==='search'){
      search=true
    }else{
      tags=false;
      category=false;
      search=false;
    }
    console.log("ccc",category,"fff",tags,"ffff",search,filter,filterBy)
  // Filter dishes based on the category and tags
  const filteredDishes = dishData.filter((dish) => {
    const titleMatches = dish?.title?.toLowerCase().includes(filter?.toLowerCase());
    if (category && tags) {
      return dish.category === category && dish.tags.includes(tags);
    } else if (category) {
      return dish.category === filter;
    } else if (tags) {
      return dish.tags.includes(filter);
    } else if(search){
      return titleMatches;
    } else{
      return true; // No category or tags specified, include all dishes
    }
  });
  console.log("data---",filteredDishes)
    useEffect(() => {
      // Retrieve cart data from localStorage on component mount
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(storedCart);
    }, []);
  
    const addToCart = (element, quantity) => {
      const priceWithoutDollar = parseFloat(element.price.replace('$', '').trim());
      const updatedCart = [...cart, { title: element.title, price: priceWithoutDollar, quantity: quantity }];
      setCart(updatedCart);
      // Save cart data to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
  
    const removeFromCart = (title) => {
      const updatedCart = cart.filter((item) => item.title !== title);
      setCart(updatedCart);
      // Save cart data to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
  
    const updateQuantity = (title, newQuantity) => {
        console.log("updating",title,newQuantity)
      const updatedCart = cart.map((item) =>
        item.title === title ? { ...item, quantity: newQuantity?(item.quantity+1>0?item.quantity+1:1):(item.quantity-1>0?item.quantity-1:1)} : item
      );
      console.log("updating",updatedCart)
      setCart(updatedCart);
      // Save cart data to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
  
    const calculateTotalPrice = (price, quantity) => {
      return (price * quantity).toFixed(2);
    };

  return (
    <>
    <Container fluid>
    <Row>
        <Col sm>
      
      <Dropdown as={ButtonGroup}>
      <Button variant="success">Category</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="/menu/category/breakfast">Breakfast</Dropdown.Item>
        <Dropdown.Item href="/menu/category/lunch">Lunch</Dropdown.Item>
        <Dropdown.Item href="/menu/category/dinner">Dinner</Dropdown.Item>
        <Dropdown.Item href="/menu/category/dessert">Dessert</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Col>
    <Col sm>
      <Dropdown as={ButtonGroup}>
      <Button variant="success">Dietary</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="/menu/dietary/gluten-free">Gluten-Free</Dropdown.Item>
        <Dropdown.Item href="/menu/dietary/vegan">High Protein</Dropdown.Item>
        <Dropdown.Item href="/menu/dietary/low-fat">Low Fat</Dropdown.Item>
       

      </Dropdown.Menu>
    </Dropdown>
    </Col>
    <Col></Col>
    <Col></Col>
    </Row>
    </Container>
    <Container fluid>
    {category && <h3 className='text-center'>Dishes in : {filter}</h3>}
    {!category&&!tags && <h3 className='text-center'>All Menu Items</h3>}
    {tags && <h3 className='text-center'>Dishes in : {filter}</h3>}
      <Row>
        {filteredDishes.map((element, index) => (
          <Col key={index} xs={6} sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Card.Img variant="top" width={'25%'} src={element.image} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>{element.description}</Card.Text>
                <Card.Text>Total Price: ${calculateTotalPrice(parseFloat(element.price.replace('$', '').trim()),cart.find((item) => item.title === element.title)?.quantity || 1 || 1)}</Card.Text>
                {cart.find((item) => item.title === element.title) ? (
                  <>
                    <div className="d-flex justify-content-center align-items-center">
                      <Button
                        variant="outline-primary"
                        onClick={() =>
                          updateQuantity(
                            element.title,
                            false
                          )
                        }
                      >
                        -
                      </Button>
                      <span className="mx-2">{cart.find((item) => item.title === element.title)?.quantity || 1}</span>
                      <Button
                        variant="outline-primary"
                        onClick={() =>
                          updateQuantity(
                            element.title,
                            true
                          )
                        }
                      >
                        +
                      </Button>
                    </div>
                    <Button
                      onClick={() => removeFromCart(element.title)}
                      variant="danger"
                      className="mt-2"
                    >
                      Remove from Cart
                    </Button>
                    
                  </>
                ) : (
                  <Button
                    onClick={() => addToCart(element, element.quantity || 1)}
                    variant="primary"
                  >
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default Menu;

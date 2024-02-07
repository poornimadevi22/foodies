import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';



const HomePage = () => {
    const dishFeedbacks = [
        { name: 'Delicious Pizza', feedback: 'The pizza was amazing! Loved every bite.', image: '/public/pizzajpg.jpg' },
        { name: 'Tasty Sushi', feedback: 'The sushi was fresh and delicious. Will order again.', image: '/public/Pizza-pasta-f.jpg'},
        { name: 'Yummy Pasta', feedback: 'The pasta was so flavorful. Great portion size.', image: '/public/sushi.jpg' },
    ];

    return (
        <Container fluid>
            
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="./Food.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                       
                        <p>Explore our delicious dishes!</p>
                    </Carousel.Caption>
                </Carousel.Item>
               
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src="./Red-Lentil.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                        <p>Explore our delicious dishes!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="./foods.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                     
                        <p>Explore our delicious dishes!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Round Dish Images */}
            <h2 className="mt-4">Featured Dishes</h2>
            <Row>
                <Col md={4} className="mb-4">
                    <img
                        src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g'
                        // alt="Dish 1"//
                        className="img-thumbnail"
                        style={{borderRadius:'50%'}}
                    />
                    <p className="text-center mt-2">Vegetabe salad</p>
                </Col>
                <Col md={4} className="mb-4">
                    <img
                        src='https://images.pexels.com/photos/3607284/pexels-photo-3607284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        // alt="Dish 2"
                        className="img-thumbnail"
                        style={{borderRadius:'50%'}}
                    />
                    <p className="text-center mt-2">Healthy Burger with tomato</p>
                </Col>
                <Col md={4} className="mb-4">
                    <img
                        src='https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        // alt="Dish 3"
                        className="img-thumbnail"
                        style={{borderRadius:'45%'}}
                    />
                    <p className="text-center mt-2">Fruit Dessert</p>
                </Col>
            </Row>

            {/* Static Dish Feedbacks */}
            <h2 className="mt-4">Customer Feedback</h2>
            <Row>
                {dishFeedbacks.map((feedback, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <div className="card">
                            <img src={feedback.image} className="card-img-top" alt={feedback.name} />
                            <div className="card-body">
                                <h5 className="card-title">{feedback.name}</h5>
                                <p className="card-text">{feedback.feedback}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

            
    

export default HomePage;





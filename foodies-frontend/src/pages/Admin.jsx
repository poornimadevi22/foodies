import authService from '../services/authservice';
import { useState, useEffect } from 'react';
import AddOrUpdateModal from '../components/AddOrUpdateDishModal';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import ErrorScreen from '../components/ErrorScreen';

const DishForm = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const [dishData, setDishData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  // let loading =null;

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    try {
      setLoading(true);
      setTimeout(async () => {
      const dishesData = await authService.getAllDish();
      setLoading(false);
      setDishData(dishesData.data);
      },3000)
    } catch (error) {
      setLoading(false)
      setError(error?.response ? error?.response?.data : 'An error occurred');
    }
  };

  const handleClose = () => {
    setDisplayModal(false);
    setFormData(null);
  };

  const handleShowModal = (data) => {
    setDisplayModal(true);
    setFormData(data);
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await authService.deleteDish(id);
      fetchDishes();
      setLoading(false);
    } catch (error) {
      setLoading(false)
      setError(error.response ? error.response.data : 'An error occurred');
    }
  };

  const handleAddOrUpdate = async (data) => {
    try {
      if (formData) {
        setLoading(true);
        await authService.updateDishData(formData._id, data);
      } else {
        await authService.addDish(data);
      }
      fetchDishes(); 
      handleClose(); 
      setLoading(false);
    } catch (error) {
      setLoading(false)
      setError(error?.response ? error?.response?.data : 'An error occurred');
      console.error('Error adding/editing dish:', error);
    }
  };

  return (
    <div className="container py-4">
      {error && <ErrorScreen errorMessage={error} />} 


{loading && (
        <div className="text-center">
          <img src="/Hourglass.gif" alt="Loading..." /> 
        </div>
      )}
      {!loading && !error && (
        <>
      <Button variant="success" onClick={() => handleShowModal(null)}>Add New Dish</Button>
      <Table striped bordered hover className="mt-4" style={{border:"currentcolor"}}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            {/* <th>Image</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dishData.map((dish) => (
            <tr key={dish._id}>
              <td>{dish.title}</td>
              <td>{dish.category}</td>
              <td>{dish.description}</td>
              <td>{dish.price}</td>
              {/* <td>{dish.image}</td> */}
              <td>
                <Button variant="info mx-3" onClick={() => handleShowModal(dish)}>Edit</Button>
                {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                <Button variant="danger" onClick={() => handleDelete(dish._id)}>Delete</Button>
                {/* <FontAwesomeIcon icon={faTrashCanUndo} />  */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddOrUpdateModal
        show={displayModal}
        handleClose={handleClose}
        handleSubmit={handleAddOrUpdate}
        formData={formData}
      />
      </>
      )}
    </div>
  );
};

export default DishForm;

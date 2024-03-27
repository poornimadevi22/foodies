import authService from '../services/authservice';
import { useState ,react } from 'react';



const DishForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    category: '',
    tags: '',
    difficulty: '',
    price: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.addDish(formData);
      console.log('Dish data submitted:', response.data);
      setFormData({
        id: '',
        title: '',
        category: '',
        tags: '',
        difficulty: '',
        price: '',
        description: '',
        image: ''
      });
    } catch (error) {
      console.error('Error submitting dish data:', error);
    }
  };

  return (
    <div style={{background: "darkseagreen"}}>
      <h2>Add new Dish</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto',  }}>
  <div style={{ marginBottom: '10px' }}>
    <label style={{ display: 'block', marginBottom: '5px' }}>Title:</label>
    <input
      type="text"
      name="title"
      value={formData.title}
      onChange={handleChange}
      style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
    />
  </div>
  <div style={{ marginBottom: '10px' }}>
    <label style={{ display: 'block', marginBottom: '5px' }}>Category:</label>
    <input
      type="text"
      name="category"
      value={formData.category}
      onChange={handleChange}
      style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
    />
  </div>
  <div style={{ marginBottom: '10px' }}>
    <label style={{ display: 'block', marginBottom: '5px' }}>Tags:</label>
    <input
      type="text"
      name="tags"
      value={formData.tags}
      onChange={handleChange}
      style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
    />
  </div>
  <div style={{ marginBottom: '10px' }}>
    <label style={{ display: 'block', marginBottom: '5px' }}>Price:</label>
    <input
      type="text"
      name="price"
      value={formData.price}
      onChange={handleChange}
      style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
    />
  </div>
  <div style={{ marginBottom: '10px' }}>
    <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
    <textarea
      name="description"
      value={formData.description}
      onChange={handleChange}
      style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
    />
  </div>
  <div style={{ marginBottom: '10px' }}>
    <label style={{ display: 'block', marginBottom: '5px' }}>Image URL:</label>
    <input
      type="text"
      name="image"
      value={formData.image}
      onChange={handleChange}
      style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
    />
  </div>
  <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px', borderRadius: '3px', border: 'none', cursor: 'pointer' }}>Submit</button>
</form>

    </div>
  );
};

export default DishForm;

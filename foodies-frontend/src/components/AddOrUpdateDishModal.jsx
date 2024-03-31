import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddOrUpdateModal = ({ show, handleClose, handleSubmit, formData }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (formData) {
      setTitle(formData.title);
      setCategory(formData.category);
      setDescription(formData.description);
      setImage(formData.image);
      setPrice(formData.price)
    } else {
      setTitle('');
      setCategory('');
      setDescription('');
      setImage('');
      setPrice('');
    }
  }, [formData]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = { title, category, description, image,price };
    handleSubmit(formData ? { ...formData, ...updatedFormData } : updatedFormData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{formData ? 'Edit Dish' : 'Add New Dish'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Dish Price</Form.Label>
            <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </Form.Group>
          <div className='my-2'>
            <Button variant="primary" type="submit">{formData ? 'Update' : 'Add'}</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddOrUpdateModal;

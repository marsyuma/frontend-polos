import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserInsertLost() {
  const [item_name, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [location_lost, setLocationLost] = useState('');
  const [date_lost, setDateLost] = useState('');

  const handleItemNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setItemName(e.target.value);
  };

  const handleDescriptionChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setDescription(e.target.value);
  };

  const handleLocationLostChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setLocationLost(e.target.value);
  };

  const handleDateLostChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setDateLost(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const requestData = {
      item_name,
      description,
      location_lost,
      date_lost,
    };

    try {
      const response = await axios.post(
        'http://localhost:9000/user/insertlost',
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        // Handle successful response, e.g., show success message
        console.log('Lost item inserted successfully!');
      } else {
        // Handle error response, e.g., show error message
        console.error('Failed to insert lost item.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('An error occurred:', error);
    }

    // Clear the input fields after submission
    setItemName('');
    setDescription('');
    setLocationLost('');
    setDateLost('');
  };

  return (
    <div>
      <h2>Insert Lost Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item_name">Item Name:</label>
          <input
            type="text"
            id="item_name"
            value={item_name}
            onChange={handleItemNameChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="location_lost">Location Lost:</label>
          <input
            type="text"
            id="location_lost"
            value={location_lost}
            onChange={handleLocationLostChange}
          />
        </div>
        <div>
          <label htmlFor="date_lost">Date Lost:</label>
          <input
            type="date"
            id="date_lost"
            value={date_lost}
            onChange={handleDateLostChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserInsertLost;

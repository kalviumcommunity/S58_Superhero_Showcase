import React, { useState } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

function Form({fetchData}) {
  const [ID, setID] = useState("");
  const [Superhero_Name, setSuperhero_Name] = useState("");
  const [Category, setCategory] = useState("");
  const [First_appearance, setFirst_appearance] = useState("");
  const [Images, setImages] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Superhero_Name: Superhero_Name,
      Category: Category,
      First_appearance: First_appearance,
      Images: Images
    };

    fetch('http://localhost:3000/superhero/Post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(data => fetchData())
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Superhero Name:</label>
        <input type="text" id="Superhero_Name" name="Superhero_Name" value={Superhero_Name} onChange={e => setSuperhero_Name(e.target.value)} />
        <label>Category:</label>
        <input type="text" id="Category" name="Category" value={Category} onChange={e => setCategory(e.target.value)} />
        <label>First appearance:</label>
        <input type="text" id="First_appearance" name="First_appearance" value={First_appearance} onChange={e => setFirst_appearance(e.target.value)} />
        <label>Images:</label>
        <input type="text" id="Images" name="Images" value={Images} onChange={e => setImages(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
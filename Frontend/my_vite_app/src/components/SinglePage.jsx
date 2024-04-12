import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './SinglePage.css'
import { useNavigate } from 'react-router-dom';

function SinglePage() {
  const [Superhero_Name, setSuperhero_Name] = useState("");
  const [Category, setCategory] = useState("");
  const [First_appearance, setFirst_appearance] = useState("");
  const [Images, setImages] = useState("");
    const [data, setData] = useState(" ");
    let navigate = useNavigate();
    let param = useParams();
    console.log(param.id);
    const fetchData = () => {
      fetch(`http://localhost:3000/superhero/Get/${param.id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(res => {
          console.log(res.data);
          setData(res.data);
        }).catch((error) => {
          console.log(error);
        })
    }
      useEffect(() => {
        fetchData();
      }, []);

      const handleSubmit = (event) => {
        event.preventDefault();
    
        const data = {
          Superhero_Name: Superhero_Name,
          Category: Category,
          First_appearance: First_appearance,
          Images: Images
        };
    
        fetch(`http://localhost:3000/superhero/Update/${param.id}`, {
          method: 'PUT',
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

      function handleDelete(){
      
      fetch(`http://localhost:3000/superhero/Delete/${param.id}`, {
        method: 'Delete',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(response => response.json())
      .then((response) => {
        alert(response.msg);
        navigate('/');
      })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
  return (
    <div className='maindiv'>
      <div className='super-div'>
      <img src={data[0].Images} alt="" />
      <h1>{data[0].Superhero_Name}</h1>
      <p>{data[0].Category}</p>
      <p>{data[0].First_appearance}</p>
      <button onClick={()=>handleDelete()}>Delete</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Superhero Name:</label>
        <input type="text" id="Superhero_Name" name="Superhero_Name" value={Superhero_Name} onChange={e => setSuperhero_Name(e.target.value)} />
        <label>Category:</label>
        <input type="text" id="Category" name="Category" value={Category} onChange={e => setCategory(e.target.value)} />
        <label>First appearance:</label>
        <input type="text" id="First_appearance" name="First_appearance" value={First_appearance} onChange={e => setFirst_appearance(e.target.value)} />
        <label>Images:</label>
        <input type="text" id="Images" name="Images" value={Images} onChange={e => setImages(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      
    </div>
    
  )
}

export default SinglePage
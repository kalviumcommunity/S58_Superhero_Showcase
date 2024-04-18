import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchBox.css';

function Search() {
  const [users, setUsers] = useState([]);
  const [createdby, setCreatedBy] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/superhero/signup/Get');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = async (e) =>{
      try {
        const response = await axios.get(`http://localhost:3000/superhero/Get/byuser?createdby=${e}`);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
    };
  }

  return (
    <>
      <div className='search'>
        <input type="text" placeholder='Search Superhero' />
        {/* <select onChange={(e)=>handleChange(e.target.value)}>
          {users.length > 0 && users.map((user, index) => (
            <option key={index} value={user.username}>
              {user.username}
            </option>
          ))}
        </select> */}
      </div>
    </>
  );
}

export default Search;
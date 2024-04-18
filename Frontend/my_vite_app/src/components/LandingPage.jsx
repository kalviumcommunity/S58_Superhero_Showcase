import React from 'react';
// import images from './data.json';
import '../App.css';
// import { fetchData } from './FetchData';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Card from './Card';

function Images() {
    const [data, setData] = useState([])
    const [users, setUsers] = useState([]);
    const [createdby, setCreatedBy] = useState([]);
    let navigate = useNavigate();
    const fetchData = () => {
        fetch('http://localhost:3000/superhero/Get')
            .then(response => response.json())
            .then(res => setData(res.data)).catch((error) => {
                // console.log(error);
                return error
            })
    }


    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3000/superhero/signup/Get');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleChange = async (e) => {
        if (e == "all") {
            fetchData()
        }
        else {
            try {
                const response = await axios.get(`http://localhost:3000/superhero/Get/byuser?createdby=${e}`);
                console.log(response.data.data);
                setData(response.data.data)
            } catch (error) {
                console.error('Error fetching users:', error);
            };

        }

    }
    useEffect(() => {
        fetchData()
        fetchUsers()
    }, []);
    console.log(data, "data")


    return (
        <>
            <div>
                <select onChange={(e) => handleChange(e.target.value)}>
                    <option value="all">All</option>
                    {users.length > 0 && users.map((user, index) => (
                        <option key={index} value={user.username}>
                            {user.username}
                        </option>
                    ))}
                </select>
            </div>
            <Card images={data} />
        </>
    );
}

export default Images;
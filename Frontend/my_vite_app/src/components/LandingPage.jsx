import React from 'react';
// import images from './data.json';
import '../App.css';
import {useNavigate} from 'react-router-dom';

function Images({data:images}) {

    let navigate = useNavigate();

    function handleNewentity(id){
        navigate(`/${id}`)
    }
    return (
        <div className="superhero-div">
            {
                images && images.map((image, i) => {
                    return (
                        <div onClick={()=>handleNewentity(image._id)} key={i} className="superhero">
                            <img src={image.Images} alt={image["Superhero_Name"]} />
                            <h1>{image["Superhero_Name"]}</h1>
                            <p>{image["Category"]}</p>
                            <p>{image["First_appearance"]}</p>
                            <p>{image._id}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Images;
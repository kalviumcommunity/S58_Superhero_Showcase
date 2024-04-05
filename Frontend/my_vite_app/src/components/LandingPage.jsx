import React from 'react';
// import images from './data.json';
import '../App.css';

function Images({data:images}) {

    return (
        <div className="superhero-div">
            {
                images && images.map((image, i) => {
                    return (
                        <div key={i} className="superhero">
                            <img src={image.Images} alt={image["Superhero_Name"]} />
                            <h1>{image["Superhero_Name"]}</h1>
                            <p>{image["Category"]}</p>
                            <p>{image["First_appearance"]}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Images;
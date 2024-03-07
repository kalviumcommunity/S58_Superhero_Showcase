import React from 'react';
import images from './data.json';
import '../App.css';

function Images(props) {

    return (
        <div className="superhero-div">
            {
                images && images.map((image, i) => {
                    return (
                        <div key={i} className="superhero">
                            <img src={image["Images"]} alt={image["Superhero Name"]} />
                            <h1>{image["Superhero Name"]}</h1>
                            <p>{image["Category"]}</p>
                            <p>{image["First appearance"]}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Images;
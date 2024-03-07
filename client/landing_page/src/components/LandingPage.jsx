import React from 'react';
import '../App.css';

function Images(props) {

    let images = [
        {
            "ID": 1,
            "Superhero Name": "Deadpool",
            "Category": "Mutant",
            "First appearance": "The New Mutants #98 (1990)",
            "Images": "./src/assets/deadpool.jpg"
        },
        {
            "ID": 2,
            "Superhero Name": "Flash",
            "Category": "Metahuman",
            "First appearance": "Flash Comics no. 1 (January 1940)",
            "Images": "./src/assets/flash.jpg"
        },
        {
            "ID": 3,
            "Superhero Name": "Homelander",
            "Category": "Briks",
            "First appearance": "The Boys #3 (2006)",
            "Images": "./src/assets/homelander.jpg"
        },
        {
            "ID": 4,
            "Superhero Name": "Spider Man",
            "Category": "Metahuman",
            "First appearance": "Amazing Fantasy #15 (August 1962)",
            "Images": "./src/assets/spiderman.jpg"
        },
        {
            "ID": 5,
            "Superhero Name": "Thor",
            "Category": "God",
            "First appearance": "Journey into Mystery no. 83 (August 1962).",
            "Images": "./src/assets/thor.jpg"
        },
        {
            "ID": 6,
            "Superhero Name": "Wonder women",
            "Category": "Briks",
            "First appearance": "All Star Comics #8 (1941)",
            "Images": "./src/assets/Wonder_women.png"
        },
    ]

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
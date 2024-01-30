import React, { useState, useEffect } from 'react';

const FetchAPI = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPhotos(data.photos); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <h1>Using Fetch API</h1>
      {photos.map((photo)=>{
        return(
        <div key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.description}</p>
            <h2>{photo.title}</h2>

        </div>
     ) })}
    </>
  );
};

export default FetchAPI;

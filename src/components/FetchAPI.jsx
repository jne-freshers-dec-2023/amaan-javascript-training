import React, { useState } from 'react';

const FetchAPI = () => {
  const [photos, setPhotos] = useState([]);

  async function fetchPhotos() {
    try {
      const res = await fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');
     
      const data = await res.json();
     
      setPhotos(data.photos);
    }
     catch (error) {
      console.error('Error:', error);
    }
  }
//Here call the api
  fetchPhotos();

  return (
    <>
      <h1>Using Fetch API</h1>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.title} width={100} />
          <p>{photo.description}</p>
          <h2>{photo.title}</h2>
        </div>
      ))}
    </>
  );
};

export default FetchAPI;

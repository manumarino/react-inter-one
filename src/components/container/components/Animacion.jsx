import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const Animacion = ({ baseUrl, imageSize }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
/*
  useEffect(() => {
    const urls = [];
    for (let i = 1; i <= 12; i++) {
      const index = i.toString().padStart(2, "0"); // Agregamos ceros a la izquierda si el índice es menor que 10
      const randomParam = Math.random().toString().substr(2); // Generar un parámetro aleatorio
      const url = `${baseUrl}${index}.png?rand=${randomParam}`; // Agregar el parámetro aleatorio a la URL
      urls.push(url);
    }
    setImageUrls(urls);

    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(() => {
        setCurrentImageIndex(currentImageIndex => {
          console.log(currentImageIndex)
          if (currentImageIndex === urls.length - 1) {
            setIsPaused(true);
            setTimeout(() => {
              setCurrentImageIndex(0); 
              setIsPaused(false);
            }, 1000);
            return currentImageIndex;
          } else {
            return currentImageIndex + 1;
          }
        });
      }, 500);
    }

    return () => clearInterval(intervalId);
  }, [baseUrl, isPaused]);
  
*/
/*
useEffect(() => {
     // Limpiar el caché antes de hacer las solicitudes HEAD
  caches.delete('https://repo2.smn.gob.ar/archivos/imasd/vmsr/radar/RMA8_240_ZH_CMAX_12.png');
  caches.delete('https://repo2.smn.gob.ar/archivos/imasd/vmsr/radar/RMA7_240_ZH_CMAX_12.png');
  caches.delete('https://repo2.smn.gob.ar/archivos/imasd/vmsr/radar/RMA6_240_ZH_CMAX_12.png');
  caches.delete('https://repo2.smn.gob.ar/archivos/imasd/vmsr/radar/RMA1_240_ZH_CMAX_12.png');


    fetch('https://repo2.smn.gob.ar/archivos/imasd/vmsr/radar/RMA8_240_ZH_CMAX_12.png', { method: 'HEAD' })
  .then(response => {
    const lastModified = response.headers.get('last-modified');
    // Aquí puedes almacenar la propiedad 'last-modified' en el estado de tu componente
    // o hacer cualquier otra operación que necesites con ella
    console.log('RMA8'+lastModified)
  })
  .catch(error => {
    console.error(error);
  });
  fetch('https://repo2.smn.gob.ar/archivos/imasd/vmsr/radar/RMA7_240_ZH_CMAX_12.png', { method: 'HEAD' })
  .then(response => {
    const lastModified = response.headers.get('last-modified');
    // Aquí puedes almacenar la propiedad 'last-modified' en el estado de tu componente
    // o hacer cualquier otra operación que necesites con ella
    console.log('RMA7'+lastModified)
  })
  .catch(error => {
    console.error(error);
  });
  fetch('https://repo2.smn.gob.ar/archivos/imasd/vmsr/radar/RMA6_240_ZH_CMAX_12.png', { method: 'HEAD' })
  .then(response => {
    const lastModified = response.headers.get('last-modified');
    // Aquí puedes almacenar la propiedad 'last-modified' en el estado de tu componente
    // o hacer cualquier otra operación que necesites con ella
    console.log('RMA6'+lastModified)
  })
  .catch(error => {
    console.error(error);
  });
  fetch('https://repo2.smn.gob.ar/archivos/imasd/vmsr/radar/RMA1_240_ZH_CMAX_12.png', { method: 'HEAD' })
  .then(response => {
    const lastModified = response.headers.get('last-modified');
    // Aquí puedes almacenar la propiedad 'last-modified' en el estado de tu componente
    // o hacer cualquier otra operación que necesites con ella
    console.log('RMA1'+lastModified)
  })
  .catch(error => {
    console.error(error);
  });
    // ...
  }, [baseUrl]);
  */
  useEffect(() => {
    const imageUrls = [
      'https://repo2.smn.gob.ar/archivos/imasd/vmsr/radar/RMA8_240_ZH_CMAX_12.png',
      'https://repo2.smn.gob.ar/archivos/imasd/vmsr/radar/RMA7_240_ZH_CMAX_12.png',
      'https://repo2.smn.gob.ar/archivos/imasd/vmsr/radar/RMA6_240_ZH_CMAX_12.png',
      'https://repo2.smn.gob.ar/archivos/imasd/vmsr/radar/RMA1_240_ZH_CMAX_12.png',
    ];
  
    const fetchImages = async () => {
      const cache = await caches.open('radar-images');
  
      for (const imageUrl of imageUrls) {
        try {
          const response = await fetch(imageUrl, { method: 'HEAD' });
          const lastModified = response.headers.get('last-modified');
          console.log(lastModified)
  
          const cachedResponse = await cache.match(imageUrl);
          if (cachedResponse && cachedResponse.headers.get('last-modified') !== lastModified) {
            // La imagen está en el cache pero ha cambiado, así que la eliminamos
            await cache.delete(imageUrl);
          }
  
          const imageResponse = await fetch(imageUrl);
          await cache.put(imageUrl, imageResponse.clone());
        } catch (error) {
          console.error(error);
        }
      }
    };
  
    fetchImages();
  }, []);
  
  

  return (
    <div>
        <Box sx={{p:"1rem"}} >
      <img src={imageUrls[currentImageIndex]} alt="Loop de imágenes" style={{ width: imageSize }} />
      </Box>
    </div>
  );
};

export default Animacion;
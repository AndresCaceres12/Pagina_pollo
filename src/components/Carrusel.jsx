import React, { useState, useEffect } from "react";
import "./Carrusel.css";

import Picada1 from "../imgCarrusel/Picada1.jpg"
import Picada2 from "../imgCarrusel/Picada2.jpg"

export const Carrusel = () => {
  const [imagenActual, setImagenActual] = useState(0);
  const img = [
   {
    img:Picada2
   },
   {
    img:Picada1
   },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setImagenActual((prevIndex) => (prevIndex + 1) % img.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [img.length]);

  return (
    <div className="carousel">
      {img.map((image, index) => (
        <img
          key={index}
          src={image.img}
          alt={`carousel-image-${index}`}
          width={200}
          height={"300px"}
          style={{ display: index === imagenActual ? "block" : "none" }}
        />
      ))}
      <p>
        Descubre las mejores Picadas en la libertad<br></br>
        Con los mejores precios
      </p>
    </div>
  );
};

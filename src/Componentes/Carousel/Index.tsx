import React, { useState } from "react";
import "./Carousel.css";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [slideCarousel, setSlideCarousel] = useState(0);

  const avançar = () => {
    const newImagens =
      slideCarousel === images.length - 1 ? 0 : slideCarousel + 1;
    setSlideCarousel(newImagens);
  };

  const voltar = () => {
    const newImagens = slideCarousel === 0 ? images.length : slideCarousel - 1;
    setSlideCarousel(newImagens);
  };
  return (
    <div className="carousel">
      <div className="carousel-botao">
        <button
          className="carousel-botao"
          onClick={voltar}
          disabled={slideCarousel === 0}
        >
          <img
            className="carousel-botao-image"
            src="Images/esquerda.png"
            alt="botao left"
          />
        </button>
        <button
          className="carousel-botao"
          onClick={avançar}
          disabled={slideCarousel === 5}
        >
          <img
            className="carousel-botao-image"
            src="Images/direita.png"
            alt="botao left"
          />
        </button>
      </div>
      <div
        className="carousel-content"
        style={{ transform: `translateX(-${slideCarousel * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === slideCarousel ? "active" : ""
            }`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

/* eslint-disable react/prop-types */
// Style Component
import './Gallery.css';

// // Background Path
// import background from '../../../assets/decorations/bgRustic1.png';

// // Background Component
// import Background from '../../background/Background';

// State
import { useState, useEffect } from 'react';

// Gallery path images
import { imageThumb, images } from '../../../data/dataGallery';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isClose, setClose] = useState(false);

  useEffect(() => {
    function handleKeyPress(e) {
      if (e.key === 'ArrowRight') changeImage('next');
      if (e.key === 'ArrowLeft') changeImage('prev');
      if (e.key === 'Escape') closeSlide();
    }
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  function changeImage(direction) {
    setCurrentIndex((prevIndex) => {
      const lastIndex = images.length - 1;
      return direction === 'next' ? (prevIndex === lastIndex ? 0 : prevIndex + 1) : prevIndex === 0 ? lastIndex : prevIndex - 1;
    });
  }

  function currentImg(index) {
    setCurrentIndex(index);
    setClose(true);
  }

  function closeSlide() {
    setClose(false);
  }

  return (
    <section className="section gallery">
      {/* <Background background={background} /> */}
      <h2 className="gallery__title growScroll timeline-superfast">Our Little Happiness</h2>
      <GalleryImg currentImg={currentImg} imageThumb={imageThumb} />
      {isClose && <GallerySlider images={images} changeImage={changeImage} closeSlide={closeSlide} currentIndex={currentIndex} />}
    </section>
  );
}

function GalleryImg({ imageThumb, currentImg }) {
  const imgGallery = imageThumb.map((item, index) => {
    return (
      <div onClick={() => currentImg(index)} key={item.alt} className="gallery__item appearUpImgScroll timeline-slow">
        <img loading="lazy" src={`imagesThumb/${item.image}`} alt={item.alt} />
      </div>
    );
  });

  return <div className="gallery__container">{imgGallery}</div>;
}

function GallerySlider({ images, changeImage, closeSlide, currentIndex }) {
  return (
    <div className="gallery__slider">
      <button onClick={() => changeImage('prev')} className="btn btn-prev">
        <i className="bi bi-caret-left"></i>
      </button>
      <div className="gallery__slider-img-container">
        <button onClick={closeSlide} className="btn btn-close">
          Close
        </button>
        <img loading="lazy" alt={images[currentIndex].alt} src={`images/${images[currentIndex].image}`} className="gallery__slider-img"></img>
      </div>
      <button onClick={() => changeImage('next')} className="btn btn-next">
        <i className="bi bi-caret-right"></i>
      </button>
    </div>
  );
}

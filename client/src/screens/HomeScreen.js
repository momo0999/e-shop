import React from 'react';
import { Carousel } from 'react-bootstrap';
import { images } from '../homeScreenImages';

const HomeScreen = () => {
  return (
    <React.Fragment>
      <Carousel className='carousel__homeScreen'>
        {images.map((image, index) => {
          return (
            <Carousel.Item interval={2000} pause='hover' key={index}>
              <img
                className='d-block w-100'
                src={image.imgUrl}
                alt={image.title}
              />
              <Carousel.Caption className='carousel__caption-homeScreen'>
                <h3>{image.title}</h3>
                <p>{image.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </React.Fragment>
  );
};

export default HomeScreen;

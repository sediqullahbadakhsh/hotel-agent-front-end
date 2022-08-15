/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { BiLeftArrow } from 'react-icons/bi';
import Carousel from 'react-multi-carousel';
import { createUser } from '../redux/User/User';
import 'react-multi-carousel/lib/styles.css';

const DetailsPage = () => {
  // const { hotel } = prop;
  const { data } = useSelector((state) => state.MostRecent);
  const dispatch = useDispatch();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="App">
      <div className="title-container">
        <h2>
          { data[2].name.toUpperCase() }
        </h2>
      </div>

      <div className="details-container">
        <div className="hotel-images">
          <Carousel
            ssr
            // partialVisbile
            // deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            // // partialVisible
            // // centerMode
            // swipeable={false}
            // draggable={false}
            // showDots
            // // responsive={responsive}
            // ssr // means to render carousel on server-side.
            // infinite
            // // autoPlay={this.props.deviceType !== 'mobile'}
            autoPlaySpeed={1000}
            keyBoardControl
            customTransition="all .5"
            transitionDuration={500}
            // containerClass="carousel-container"
            // removeArrowOnDeviceType={['tablet', 'mobile']}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
          >
            <div><img src={data[2].image[0]} alt="hotel" className="details-img" /></div>
            <div>
              <img src={data[2].image[1]} alt="hotel" className="details-img" />
            </div>
            <div><img src={data[2].image[2]} alt="hotel" className="details-img" /></div>
          </Carousel>
        </div>
        <div className="hotel-details">
          <p className="text-xl">
            📌
            {' '}
            { data[2].address }
          </p>
          <div className="odd">
            <p>Price</p>
            <div className="views">
              <p>
                $
                {' '}
                { data[2].cost }
              </p>
            </div>
          </div>
          <div className="even">
            <h3>Description</h3>
            <div className="views">
              <p>🔖</p>
            </div>
          </div>
          <p className="text-xl">
            { data[2].description }
          </p>
          <button type="button" className="button-details" label="Reserve" onClick={() => dispatch(createUser())}>
            <BsBookmarkCheckFill />
            Reserve
            {' '}
            <FiArrowRightCircle />
          </button>
        </div>
      </div>
      <div className="return-btn">
        <button type="button" className="button-return" label="Reserve" onClick={() => dispatch(createUser())}>
          <BiLeftArrow />
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;

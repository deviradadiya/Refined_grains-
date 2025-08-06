import React from "react";
// import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';

const OurProductCarousel = () => {

    const options = {
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    };

  return (
      <>
          <div>
              <OwlCarousel className="owl-theme" {...options}>
                  <div className="item">
                      <h4>Item 1</h4>
                  </div>
                  <div className="item">
                      <h4>Item 2</h4>
                  </div>
                  <div className="item">
                      <h4>Item 3</h4>
                  </div>
                  <div className="item">
                      <h4>Item 4</h4>
                  </div>
                  <div className="item">
                      <h4>Item 5</h4>
                  </div>
              </OwlCarousel>
          </div>
      </>
  );
};

export default OurProductCarousel;

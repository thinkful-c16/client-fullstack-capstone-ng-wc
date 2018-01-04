import React from 'react';
import { connect } from 'react-redux';

import Slider from 'react-slick';

export class LibraryCarousel extends React.Component {
  render() {

    const clouds = this.props.clouds.map((cloud, index) => (
        <a key={index} onClick={() => console.log(cloud)}>
          <div>
            <span>
              {cloud.title}
            </span>
          </div>
        </a>
      ));

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
          {clouds}
        </Slider>
    );
  }
}

const mapStateToProps = state => ({
  clouds: state.clouds
});

export default connect(mapStateToProps) (LibraryCarousel);

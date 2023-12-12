import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./data";
import PropTypes from "prop-types";

function ProductCarousel({ products }) {
  return (
    <div>
      <Carousel
        showDots={false}
        responsive={responsive}
        autoPlaySpeed={3000}
        autoPlay={true}
        infinite={true}
        customTransition="all 500ms ease"
        transitionDuration={1000}
      >
        {products}
      </Carousel>
    </div>
  );
}

ProductCarousel.propTypes = {
  products: PropTypes.array.isRequired, // Change 'array' to the appropriate type
};
export default ProductCarousel;

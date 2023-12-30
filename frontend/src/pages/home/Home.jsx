import Slider from "../../components/slider/Slider";
import HomeInfo from "../../components/homeInfo/HomeInfo";
import { productData } from "../../components/carousel/data";
import ProductCarousel from "../../components/carousel/Carousel";
import CarouselItem from "../../components/carousel/CarouselItem";
import PropTypes from "prop-types";
import ProductCategory from "../../components/homeInfo/productCategory";

export function ProductHeading({ heading, btnText }) {
  return (
    <>
      <div className="--flex-between">
        <h2 className="--fw-thin">{heading}</h2>
        <button className="--btn">{btnText}</button>
      </div>
      <div className="--hr"></div>
    </>
  );
}

const products = productData.map((product) => {
  return (
    <div key={product.id}>
      <CarouselItem
        description={product.description}
        name={product.name}
        price={product.price}
        url={product.imageurl}
      />
    </div>
  );
});

function Home() {
  return (
    <>
      <Slider />
      <section>
        <div className="container">
          <HomeInfo />
          <ProductHeading heading={"Recent Products"} btnText={"Buy now>>>>"} />
          <ProductCarousel products={products} />
        </div>
      </section>
      <section className="--bg-grey">
        <div className="container">
          <h3>Category</h3>
          <ProductCategory />
        </div>
      </section>
      <section>
        <div className="container">
          <HomeInfo />
          <ProductHeading heading={"Mobile Phones"} btnText={"Buy now>>>>"} />
          <ProductCarousel products={products} />
        </div>
      </section>
    </>
  );
}

ProductHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default Home;

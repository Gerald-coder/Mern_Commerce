import "./productCategory.scss";
/* eslint-disable */
function ProductCategory() {
  const categories = [
    {
      id: 1,
      title: "Gadgets",
      image: "https://i.ibb.co/5GVkd3m/c1.jpg",
    },
    {
      id: 2,
      title: "Womens Fashion",
      image: "https://i.ibb.co/nQKLjrW/c2.jpg",
    },
    {
      id: 3,
      title: "Sport Sneakers",
      image: "https://i.ibb.co/fNkBYgr/c3.jpg",
    },
  ];

  const Category = ({ title, url }) => {
    return (
      <div className="category">
        <h3>{title}</h3>
        <img src={url} alt="cat" />
        <button className="--btn">{"Buy Now>>>"}</button>
      </div>
    );
  };
  return (
    <div className="categories">
      {categories.map((cat) => {
        return (
          <div key={cat.id}>
            <Category {...cat} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductCategory;

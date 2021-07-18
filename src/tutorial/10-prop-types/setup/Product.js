import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  const url = image ? image.url : defaultImage;
  const pric = price ? price : 4.99;
  return (
    <article className="product">
      <img src={url} alt={name || "unknown"} />
      <h4>{name}</h4>
      <p>${pric}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: 'default name',
//   price: 0.00,
//   image: defaultImage
// }

export default Product;

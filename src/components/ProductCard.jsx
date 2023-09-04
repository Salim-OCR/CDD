import React from "react";

const ProductCard = ({
  title,
  description,
  amazonLink,
  subtitle,
  image,
  imageTitle,
}) => {
  return (
    <li className="product-card">
      <h4>{title}</h4>
      <img src={image} alt={imageTitle} />
      <p>
        <em>{subtitle}</em> {description}
      </p>
      <a href={amazonLink} target="_blank" rel="noopener noreferrer">
        Voir sur Amazon
      </a>
    </li>
  );
};

export default ProductCard;

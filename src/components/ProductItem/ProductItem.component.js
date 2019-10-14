import React from 'react';

const ProductItem = (props) => {
  const { name, image, salePrice, originalPrice } = props.data;
  return (
    <li>
      <div className="recepies-item">
        <img src={image} alt={name} /></div>
        <div className="content-item">
          <h6><span>{name}</span></h6>
          <p>Sale Price: <span>{salePrice}</span> - Original Price: <span>{originalPrice}</span></p>
          <ul className="star-rank">
            <li><i className="fas fa-star"></i></li>
            <li><i className="fas fa-star"></i></li>
            <li><i className="fas fa-star"></i></li>
            <li><i className="fas fa-star"></i></li>
            <li><i className="far fa-star"></i></li>
          </ul>
      </div>
    </li>
      )
    }
    
export {
        ProductItem
      };
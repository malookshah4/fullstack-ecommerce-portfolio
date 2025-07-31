import React from "react";
import { useDispatch } from "react-redux";
import Rating from "./Rating";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import ItemFeature from "./ItemFeature";
import { addItem } from "../store/cartSlice";
import "./ItemCardX.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ImageWithFallback from './ImageWithFallback';

const ItemCardX = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item));
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="item-card-x">
      <div className="card__image-wrapper">
        <Link to={`/product/${item.id}`}>
         <ImageWithFallback
          src={item.primaryImage}
          alt={item.name}
          className="card__image"
        />
        </Link>
      </div>

      <div className="card__body">
        <Link to={`/product/${item.id}`} className="card__title-link">
          <h5 className="card__title">{item.name}</h5>
        </Link>
        <div className="card__rating">
          <Rating
            rating={item.rating.averageScore}
            numReviews={item.rating.numReviews}
          />
        </div>
        <div className="card__action-row">
          <p className="card__price">${item.price.current.toFixed(2)}</p>
          {/* 4. Add the onClick handler to the button */}
          <button
            className="card__cart-btn"
            aria-label="Add to cart"
            onClick={handleAddToCart}
          >
            <PiShoppingCartSimpleFill color="white" />
          </button>
        </div>
      </div>

      <ItemFeature features={item.features} />
    </div>
  );
};

export default ItemCardX;

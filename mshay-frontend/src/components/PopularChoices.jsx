import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rating from "./Rating";
import "./PopularChoices.css";
import { FiShoppingCart } from "react-icons/fi";
import { addItem } from "../store/cartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ImageWithFallback from './ImageWithFallback';

const PopularItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item));
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <Link to={`/product/${item.id}`} className="popular-card-link">
      <div className="popular-card">
        <div className="popular-card__image-wrapper">
          <ImageWithFallback
          src={item.primaryImage}
          alt={item.name}
          className="card__image"
        />
        </div>
        <div className="popular-card__content">
          <h5 className="popular-card__title">{item.name}</h5>
          <Rating
            rating={item.rating.averageScore}
            numReviews={item.rating.numReviews}
          />

          <div className="popular-card__footer">
            <p className="popular-card__price">
              ${item.price.current.toFixed(2)}
            </p>
            <button
              className="popular-card__cart-btn"
              onClick={handleAddToCart}
              aria-label="Add to cart"
            >
              <FiShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

const PopularChoices = () => {
  const allItems = useSelector((store) => store.products.productList.items);

  const popularItems = useMemo(() => {
    return [...allItems].sort(() => 0.5 - Math.random()).slice(0, 3);
  }, [allItems]);

  return (
    <section className="popular-choices">
      <div className="popular-choices__container">
        <h2 className="popular-choices__title">Popular Choices</h2>
        <div className="popular-choices__grid">
          {popularItems.map((item) => (
            <PopularItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularChoices;

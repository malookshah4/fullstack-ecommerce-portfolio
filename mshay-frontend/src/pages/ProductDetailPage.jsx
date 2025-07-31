import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById } from "../store/productSlice";
import { addItem } from "../store/cartSlice";
import { toast } from "react-toastify";
import Rating from "../components/Rating";
import ItemFeature from "../components/ItemFeature";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { productId } = useParams(); // Gets ID from the URL (e.g., "prod_1")
  const dispatch = useDispatch();

  const { status, ...product } = useSelector(
    (state) => state.products.productDetails
  );

  // This runs when the page loads or the productId in the URL changes
  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [productId, dispatch]);

   // 3. Simplified and more reliable loading check
  if (status === "loading" || status === "idle") {
    return <div className="loading-container">Loading...</div>;
  }

  if (status === "failed") {
    return <div className="loading-container">Product not found.</div>;
  }

  const handleAddToCart = () => {
    dispatch(addItem(product));
    toast.success(`${product.name} added to cart!`);
  };

  
  return (
    <div className="product-detail-container">
      <div className="product-detail-grid">
        {/* Left Column: Image */}
        <div className="product-image-gallery">
          <img
            src={product.primaryImage}
            alt={product.name}
            className="main-image"
          />
        </div>

        {/* Right Column: Details */}
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-rating">
            <Rating
              rating={product.rating.averageScore}
              numReviews={product.rating.numReviews}
            />
          </div>
          <p className="product-price">${product.price?.current?.toFixed(2)}</p>
          <p className="product-description">{product.shortDescription}</p>

          <div className="product-actions">
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          <div className="product-specs">
            <ItemFeature features={product.features} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

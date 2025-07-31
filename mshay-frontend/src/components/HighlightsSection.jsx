import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FiHeart } from 'react-icons/fi';
import './Highlights.css'; 
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'; 
import ImageWithFallback from './ImageWithFallback';

const HighlightProductCard = ({ item }) => {
  const onSale = item.price.original > item.price.current;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item));
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <article className="highlight-card">
      <div className="card-media">
        {onSale && <span className="sale-badge">Sale</span>}
        <button className="wishlist-btn" aria-label="Add to Wishlist">
          <FiHeart />
        </button>
       <Link to={`/product/${item.id}`}>
          <ImageWithFallback
          src={item.primaryImage}
          alt={item.name}
          className="card__image"
        />
        </Link>
        <div className="card-options">
          <button className="add-to-cart-btn"
          onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      <div className="card-details">
        <Link to={`/product/${item.id}`} className="product-title">{item.name}</Link>
        <div className="product-price">
          <span className="current-price">${item.price.current.toFixed(2)}</span>
          {onSale && <del className="original-price">${item.price.original.toFixed(2)}</del>}
        </div>
      </div>
    </article>
  );
};


const HighlightsSection = () => {
  const [activeTab, setActiveTab] = useState('bestsellers');
  const allItems = useSelector((store) => store.products.productList.items);

  // In a real app, you'd filter based on the tab. Here, we'll just shuffle for demo.
  const displayedItems = useMemo(() => {
    return [...allItems].sort(() => 0.5 - Math.random()).slice(0, 4);
  }, [activeTab, allItems]); // Re-shuffle when tab changes

  return (
    <section className="highlights-section">
      <h2 className="highlights-title">This week's highlights</h2>
      
      <nav className="highlights-tabs">
        <a href="#" className={activeTab === 'bestsellers' ? 'active' : ''} onClick={() => setActiveTab('bestsellers')}>Best sellers</a>
        <a href="#" className={activeTab === 'new' ? 'active' : ''} onClick={() => setActiveTab('new')}>New arrivals</a>
        <a href="#" className={activeTab === 'sale' ? 'active' : ''} onClick={() => setActiveTab('sale')}>Sale items</a>
        <a href="#" className={activeTab === 'top' ? 'active' : ''} onClick={() => setActiveTab('top')}>Top rated</a>
      </nav>

      <div className="highlights-grid">
        {displayedItems.map(item => (
          <HighlightProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
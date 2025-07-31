import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import all the components that make up your home page content
import NewArrivalsSlider from "../components/NewArrivalsSlider";
import PopularChoices from "../components/PopularChoices";
import HighlightsSection from "../components/HighlightsSection";
import ItemCardX from "../components/ItemCardX";
import { fetchProducts } from "../store/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { items: productList, status } = useSelector(
    (store) => store.products.productList
    
  );

  // console.log(`homepage ${productList[0]?.id}`);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading products...</div>
  }

  return (
    <>
      <NewArrivalsSlider />
      <PopularChoices />
      <HighlightsSection />

      <div className="wrapper-container" style={{ padding: "2rem 0" }}>
        <h4 className="suggested-items-title">All Products</h4>
        <main className="content-area">
          {productList.map((item) => (
            <ItemCardX key={item.id} item={item} />
          ))}
        </main>
      </div>
    </>
  );
};

export default HomePage;

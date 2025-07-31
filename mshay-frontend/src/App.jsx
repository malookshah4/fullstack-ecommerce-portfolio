import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import routing
import { Routes, Route } from "react-router-dom";

// Import layout components that appear on ALL pages
import HeaderX from "./components/HeaderX.jsx";
import Footer from "./components/Footer.jsx";
import CartSidebar from "./components/CartSidebar.jsx";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";   

// Import page components
import HomePage from "./pages/HomePage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import AboutPage from './pages/AboutPage.jsx'

function App() {
  return (
    <div className="body-x">
      {/* These components are part of the layout and appear on every page */}
      <CartSidebar />
      <HeaderX />
      
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* The <main> tag now holds the router */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage/>}></Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
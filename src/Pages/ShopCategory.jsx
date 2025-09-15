import React, { useState } from "react";
import all_product from "../Components/Assets/all_product";
import Item from "../Components/Item/Item";
import './CSS/ShopCategory.css';

const ShopCategory = (props) => {
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [sortOption, setSortOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  // Simplify category mapping to match product data
  const categoryMap = {
    "mens": "mens",
    "womens": "womens",
    "t-shirt": "t-shirt",
    "pant": "pant",
    "watch": "watch",
    "mobile": "mobile",
    "headphone": "headphone",
    "footwear": "footwear"
  };

  const rawCategory = (props.category || "").toString().toLowerCase().trim();
  const normalizedCategory = categoryMap[rawCategory] || rawCategory;

  const filteredProducts = all_product.filter(
    (item) => {
      const matchesCategory = item.category.toLowerCase().trim() === normalizedCategory;
      const matchesSearch = searchTerm === "" ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    }
  );

  const sortedProducts = React.useMemo(() => {
    const arr = [...filteredProducts];
    switch (sortOption) {
      case "price-low":
        arr.sort((a, b) => a.new_price - b.new_price);
        break;
      case "price-high":
        arr.sort((a, b) => b.new_price - a.new_price);
        break;
      case "name-asc":
        arr.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        arr.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "discount":
        arr.sort((a, b) => {
          const discountA = ((a.old_price - a.new_price) / a.old_price) * 100;
          const discountB = ((b.old_price - b.new_price) / b.old_price) * 100;
          return discountB - discountA;
        });
        break;
      case "id-new":
        arr.sort((a, b) => b.id - a.id);
        break;
      case "id-old":
        arr.sort((a, b) => a.id - b.id);
        break;
      default:
        break;
    }
    return arr;
  }, [filteredProducts, sortOption]);

  return (
    <div className="shop-category">
      {props.banner && (
        <div className="shopcategory-banner">
          <img src={props.banner} alt={`${props.category} banner`} />
        </div>
      )}
      <div className="shopcategory-indexSort">
        <select className="shopcategory-sort" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort by</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-low">Price (Low → High)</option>
          <option value="price-high">Price (High → Low)</option>
          <option value="discount">Highest Discount</option>
          <option value="id-new">Newest First</option>
          <option value="id-old">Oldest First</option>
        </select>

        <div className="shopcategory-controls">
          <div className="shopcategory-search">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="shopcategory-view-toggle">
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <span className="grid-icon">⊞</span>
            </button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <span className="list-icon">☰</span>
            </button>
          </div>

          <div className="shopcategory-results">
            <span className="results-count">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </span>
          </div>

          {/* Colorful Decorative Elements */}
          <div className="colorful-decoration">
            <div className="rainbow-bar">
              <div className="rainbow-segment red"></div>
              <div className="rainbow-segment orange"></div>
              <div className="rainbow-segment yellow"></div>
              <div className="rainbow-segment green"></div>
              <div className="rainbow-segment blue"></div>
              <div className="rainbow-segment purple"></div>
            </div>
            <div className="floating-colors">
              <div className="color-dot color-1"></div>
              <div className="color-dot color-2"></div>
              <div className="color-dot color-3"></div>
              <div className="color-dot color-4"></div>
              <div className="color-dot color-5"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="shopcategory-products">
        {sortedProducts.length === 0 ? (
          <div className="no-products">No products found in this category.</div>
        ) : (
          sortedProducts.slice(0, visibleProducts).map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              category={item.category}
            />
          ))
        )}
      </div>

      {visibleProducts < sortedProducts.length && (
        <button
          className="shopcategory-loadmore"
          onClick={() => setVisibleProducts(visibleProducts + 12)}
        >
          Explore More
        </button>
      )}
    </div>
  );
};

export default ShopCategory;

import React from 'react';
import './RelatedProduct.css';
import all_product from '../Assets/all_product';
import Item from '../Item/Item';

const RelatedProduct = ({ category, excludeId }) => {
  const relatedProducts = all_product.filter(product => 
    product.category === category && product.id !== excludeId
  ).slice(0, 4);

  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <hr />
      {relatedProducts.length > 0 ? (
        <div className="related-products-list">
          {relatedProducts.map((item) => (
            <Item 
              key={item.id} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
            />
          ))}
        </div>
      ) : (
        <p className="no-related-products">No related products found</p>
      )}
    </div>
  );
};

export default RelatedProduct;


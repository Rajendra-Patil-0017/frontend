import React, { useState, useContext, useMemo } from 'react';
import './DescriptionBox.css';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const categoryDescriptions = {
  mens:
    "Discover premium men's shirts crafted from breathable fabrics with modern fits—perfect for casual and formal wear.",
  womens:
    "Explore elegant women's styles designed for comfort and confidence, ideal for everyday wear and occasions.",
  't-shirt':
    'Soft, breathable cotton T-shirts with a classic fit—easy to pair and made for everyday comfort.',
  pant:
    'Durable denims and cotton pants offering structure, stretch, and all‑day comfort.',
  watch:
    'Precision timepieces with durable materials and timeless design—perfect for daily use and formal looks.',
  mobile:
    'Latest smartphones with powerful performance, long battery life, and vivid displays for work and play.',
  headphone:
    'Immersive sound with deep bass and clear highs, comfortable for long listening and gaming sessions.',
  footwear:
    'Comfortable, durable footwear built for daily wear with supportive soles and premium finishes.',
};

function buildProductDescription(product) {
  if (!product) return '';
  const name = product.name;
  const cat = String(product.category || '').toLowerCase();
  switch (cat) {
    case 'mobile':
      return `${name} delivers fast performance, reliable battery life, and a crisp display—great for work, gaming, and entertainment.`;
    case 'watch':
      return `${name} pairs timeless design with reliable movement and a comfortable strap—suited for everyday wear and formal occasions.`;
    case 'headphone':
      return `${name} offers clear audio with punchy bass and soft ear cushions—ideal for music, calls, and long gaming sessions.`;
    case 'footwear':
      return `${name} combines comfort and durability with a cushioned insole and sturdy outsole—versatile for daily use.`;
    case 'pant':
      return `${name} is made from durable fabric with a comfortable fit—easy to style for casual and smart looks.`;
    case 't-shirt':
      return `${name} is a soft, breathable cotton tee with a versatile fit—perfect for everyday layering.`;
    case 'mens':
      return `${name} is crafted from breathable fabric with a clean, modern silhouette—comfortable for both work and weekends.`;
    case 'womens':
      return `${name} features a flattering fit and smooth fabric—easy to dress up or down for any occasion.`;
    default:
      return `${name} delivers reliable quality and everyday comfort with materials designed to last.`;
  }
}

const DescriptionBox = ({ product: productProp }) => {
  const [activeTab, setActiveTab] = useState('description');
  const { productId } = useParams();
  const { all_product } = useContext(ShopContext);

  const productFromRoute = useMemo(() => {
    const idNum = Number(productId);
    if (!Number.isNaN(idNum)) {
      return (all_product || []).find((p) => p.id === idNum);
    }
    return undefined;
  }, [all_product, productId]);

  const product = productProp || productFromRoute;
  const categoryKey = String(product?.category || '').toLowerCase();
  const categoryText = categoryDescriptions[categoryKey];
  const productText = buildProductDescription(product);

  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div
          className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </div>
        <div
          className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (147)
        </div>
      </div>

      <div className='descriptionbox-description'>
        {activeTab === 'description' ? (
          <div>
            {productText && <p>{productText}</p>}
            {categoryText && <p>{categoryText}</p>}
            {!productText && !categoryText && (
              <p>
                Shop quality products across categories with reliable materials, modern designs, and
                everyday comfort.
              </p>
            )}
          </div>
        ) : (
          <div className='reviews'>
            <p>⭐️⭐️⭐️⭐️⭐️ - "Amazing quality and fast delivery!"</p>
            <p>⭐️⭐️⭐️⭐️ - "Good experience overall, will shop again."</p>
            <p>⭐️⭐️⭐️⭐️⭐️ - "SnapCart never disappoints! Love it."</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;

import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/four-star-rating-icon.png"
import { ShopContext } from '../../Context/ShopContext'

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

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="productdisplay-rigth">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="rating" />
          <p>146</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-prices-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          <p>{buildProductDescription(product)}</p>
          {categoryDescriptions[String(product.category || '').toLowerCase()] && (
            <p>{categoryDescriptions[String(product.category || '').toLowerCase()]}</p>
          )}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size-options">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category:</span> {product.category}</p>
        <p className='productdisplay-right-category'><span>Tags:</span> Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay

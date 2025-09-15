import React from "react";
import './Popular.css';
import Item from "../Item/Item";

import all_product from '../Assets/all_product';

const popularIds = [12, 2, 19, 29, 25, 8, 22]; // headphone, footwear, pant, watch, t-shirt, womens, mens
const data_product = popularIds
    .map((id) => all_product.find((p) => p.id === id))
    .filter(Boolean);

const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN WORLD</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        category={item.category}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Popular;

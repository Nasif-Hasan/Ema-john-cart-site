import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props
    const { name, img, seller, price, ratings } = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} Stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-name'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
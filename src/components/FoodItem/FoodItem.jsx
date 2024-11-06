import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StroreContext'
const FoodItem = ({ id, name, price, description, image }) => {
    
    const {cartItem,removeFromCart,addToCart} = useContext(StoreContext)
    return (

        < div className='food-item' >
            <div className="food-item-img-container">
                <img src={image} alt="" className="food-item-image" />
                {!cartItem[id]
                    ? <img className='add' src={assets.add_icon_white} onClick={() => addToCart(id)} />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" className="" />
                        {cartItem[id]}
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" className="" />
                    </div>}
                <dix className="food-item-info">
                    <div className="food-item-name-rating">
                        <p>{name}</p>
                        <img src={assets.rating_starts} alt="" className="" />
                    </div>
                    <p className="food-item-desc">{description}</p>
                    <p className="food-item-price">${price}</p>
                </dix>
            </div>
        </div>
    )
}

export default FoodItem
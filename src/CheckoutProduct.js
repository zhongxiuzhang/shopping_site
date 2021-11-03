import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, image, title, price, rating, amount}) {
    const [state, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    const addItem = () => {
        dispatch({
            type: "ADD_ITEM",
            id: id,
        });
    };

    const reduceItem = () => {
        dispatch({
            type: "REDUCE_ITEM",
            id: id,
        });
    };

    return (
        <div>
            <div className="checkoutProduct">
                <img src={image} alt="" className="checkoutProduct__image" />
                
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">
                        {title} 
                    </p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        {Array(rating).fill().map(item => (<p>⭐</p>))}
                    </div>
                    <p>amount: <span><button onClick={reduceItem}>-</button><span className="checkoutProduct_amount"> {amount} </span><button onClick={addItem}>+</button></span></p>
                    <button onClick={removeFromBasket}>Remove from Basket</button> 
                </div>
                

            </div> 
        </div>
    )
}

export default CheckoutProduct


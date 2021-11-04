import React from "react";
import "./CheckoutProduct.css";
import { connect } from 'react-redux';

// {id, image, title, price, rating, amount}
const removeFromBasket = (the_id) => {
    return {
        type: "REMOVE_FROM_BASKET",
        id: the_id,
    };
};
// const sRemoveFromBasket = () => {
//     store.dispatch(removeFromBasket());
// };

const addItem = (the_id) => {
    return {
        type: "ADD_ITEM",
        id: the_id,
    };
};
// const sAddItem = () => {
//     store.dispatch(addItem());
// };

const reduceItem = (the_id) => {
    return{
        type: "REDUCE_ITEM",
        id: the_id,
    };
};
// const sReduceItem = () => {
//     store.dispatch(reduceItem());
// };
function CheckoutProduct(props) {
    return (
        <div>
            <div className="checkoutProduct">
                <img src={props.image} alt="" className="checkoutProduct__image" />
                
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">
                        {props.title} 
                    </p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        {Array(props.rating).fill().map(item => (<p>⭐</p>))}
                    </div>
                    <p>amount: <span><button onClick={()=>props.sReduceItem(props.id)}>-</button><span className="checkoutProduct_amount"> {props.amount} </span><button onClick={()=>props.sAddItem(props.id)}>+</button></span></p>
                    <button onClick={()=>props.sRemoveFromBasket(props.id)}>Remove from Basket</button>
                </div>
                
            </div> 
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        sRemoveFromBasket: (id) => {dispatch(removeFromBasket(id))},
        sAddItem: (id) => {dispatch(addItem(id))},
        sReduceItem: (id) => {dispatch(reduceItem(id))},
    }
  };

const RCheckoutProduct = connect(null, mapDispatchToProps)(CheckoutProduct);

export default RCheckoutProduct


import React from "react";
import "./Product.css"
import { connect } from "react-redux";

const addToBasket = (props) => {
    return {
        type: "ADD_TO_BASKET",
        item: {
            id: props.id,
            image: props.image,
            price: props.price,
            rating: props.rating,
            amount: 1,
        },
    };
};

function Product(props) {

    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p>{props.title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(props.rating).fill().map((_, i) => (<p>⭐</p>))}
                    </div>
                </div>

                <img src={props.image} alt="product-image" />
                
                <button onClick={()=>props.sAddToBasket(props)}>Add to Basket</button>
            </div>            
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        sAddToBasket: (props) => {dispatch(addToBasket(props))},
    }
};

const RProduct = connect(null, mapDispatchToProps)(Product);

export default RProduct
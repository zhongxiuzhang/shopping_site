import React from "react";
import "./Checkout.css";
import RCheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { connect } from 'react-redux';

function Checkout(props) {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="img_ad" className="checkout__ad" />
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                    {props.basket.map( item => (
                        <RCheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                            amount = {item.amount}
                        />
                   ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal /> 
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      basket: state.basket
    }
  };

const RCheckout = connect(mapStateToProps)(Checkout);

export default RCheckout
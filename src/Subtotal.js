import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import store from "./store";
import { getBasketTotal, getBasketAmount } from "./reducer";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({getBasketAmount(store.getState().basket)} items): <strong>${value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(store.getState().basket)}
                displayType={"text"}
                thousandSeparator={true}
            />

            <button>Proceed to Checkout</button>

        </div>
    );
}

export default Subtotal
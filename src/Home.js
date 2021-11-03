import React from "react";
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://i.ibb.co/S6HNnTJ/e-commerce-for-you2.png" alt="e-commerce" className="home__image" />
                    
                    <div className="home__row">
                        <Product 
                            id="11"
                            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Brown)"
                            price={11.96}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/813VTGNZJ9L.__AC_SX395_SY395_QL70_FMwebp_.jpg"
                        />
                        <Product 
                            id="12"
                            title="Basics 30% Recycled Multipurpose Copy Printer Paper - 8.5 x 11 Inches, 3 Ream Case (1500 Sheets)"
                            price={19.99}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/412XiPvW6yS.jpg"
                        />
                    </div>
                    
                    <div className="home__row">
                        <Product 
                            id="21"
                            title="Tide Liquid Laundry Detergent Soap, High Efficiency (HE), Original Scent, 64 Loads"
                            price={11.97}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/71SzLTvO2PL._AC_SL1500_.jpg"
                        />
                        <Product 
                            id="22"
                            title="Quest Nutrition Tortilla Style Protein Chips, Chili Lime, Baked, 1.1 Ounce (12 Count)"
                            price={23.44}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/61tE9EAe-lL._AC_SL1000_.jpg"
                        />
                        <Product 
                            id="23"
                            title="Optimum Nutrition Gold Standard 100% Whey Protein Powder, Chocolate Hazelnut, 2 Pound (Packaging May Vary)"
                            price={36.74}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/71mCrNBGR+L._AC_SL1500_.jpg"
                        />
                    </div>
                    <div className="home__row">
                        <Product 
                            id="31"
                            title="Samsung Business FT452 Series 22 inch 1080p 75Hz IPS Computer Monitor for Business with HDMI, DisplayPort, USB, HAS Stand (F22T452FQN) Black"
                            price={234.99}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/91eW1QmtBSL._AC_SL1500_.jpg"
                        />  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

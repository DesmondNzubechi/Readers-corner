import React from "react";
import { createContext, useState } from "react";

import featureImg from "../components/Features/FeatureImg/featureImg";


 export const ShopContext = createContext(null);
 const getDefaultCart = () => {
    let cart = {};
    for (let i= 1; i < featureImg.length + 1; i++) {
        cart[i] = 0;
        
    }
    return cart;
 }
 /*
{
    1:2,
}*/
const ShopContextProvider = ( props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }) );
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1}));
    };
    const contextValue = {cartItems, addToCart, removeFromCart};
    console.log(cartItems)
    return(
<ShopContext.Provider value={contextValue}>
   {props.children}
</ShopContext.Provider>
    )
}

export default ShopContextProvider;
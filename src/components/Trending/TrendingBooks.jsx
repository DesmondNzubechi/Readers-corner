import React from "react";
import Trending from "./Trending";
import TrendingProduct from "./TrendingProduct";
import '../Features/Features.css';


const TrendingBooks = () => {
    return (
        <div className="Fea">
          <div className="fHead"><h1 >Trending Books</h1></div>
         
          <div className="featured">
         {TrendingProduct.map((trendingItem) => (
          
            <Trending key={trendingItem.id} data={trendingItem} />
          
         ))}
       </div>
</div>
    )
}
export default TrendingBooks; 
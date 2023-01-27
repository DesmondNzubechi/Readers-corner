import React from "react";
import { ReactDOM } from "react";
import './Features.css'
import featureImg from "./FeatureImg/featureImg";
import FeatureItems from "./FeatureItems";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

 const Features = () => {
   useEffect(() => {
      Aos.init();
    }, [])
    return(
        <div className="Fea">
          <div className="fHead"><h1 >Features</h1></div>
         
          <div className="featured">
         {featureImg.map((featurePro) => (
          
            <FeatureItems key={featurePro.id} data={featurePro} />
          
         ))}
       </div>
</div>
)};

export default Features;
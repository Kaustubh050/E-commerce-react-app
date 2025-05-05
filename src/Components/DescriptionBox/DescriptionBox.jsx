import React from "react";
import './DescriptionBox.css'
const DescriptionBox=()=>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>   An e-commerce website is an online platform that allows businesses and consumers to buy and sell products or services over the internet. 
                    It provides a seamless shopping experience with features such as product listings, secure payments, user reviews, and order tracking. 
                    With the growing trend of online shopping, e-commerce websites play a crucial role in the digital marketplace.
                    <p> The success of an e-commerce platform depends on various factors, including user-friendly design, fast loading speeds, and a secure payment system. 
                    Businesses also leverage digital marketing strategies such as SEO, social media advertising, and email marketing to attract and retain customers. 
                    As technology evolves, innovations like AI-powered recommendations and chatbots continue to enhance the online shopping experience.
                </p>
                </p>
            </div>
        </div>
    )
    
}
export default DescriptionBox;
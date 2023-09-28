/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const DonationCard = ({card}) => {
    // eslint-disable-next-line no-unused-vars
    const {id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color,price}= card ||{}
    return (
        <div className=" ">
          


<div className=" bg-base-300">
    <div>
    <div className=" flex flex-1  gap-5">
    <figure><img  src={picture} alt="" /></figure>
    <div className="">
    
    <button style={{ color: text_button_bg_color }} className="p-1">{category}</button> 
    <p  className="text-start text-2xl font-semibold ">{title}</p> 
    <p style={{ color: text_button_bg_color }} className="text-sm"><span className=""style={{color:text_button_bg_color}}>$</span>{price}.00</p>   
   <Link to={`/cards/${id}`}>
   <button  style={{ backgroundColor: category_bg_color}} className="btn font-medium ">View Details</button>
   </Link>
    
   
    </div>
    </div>
    
        </div>
        
</div>


        </div>






    );
};

export default DonationCard;
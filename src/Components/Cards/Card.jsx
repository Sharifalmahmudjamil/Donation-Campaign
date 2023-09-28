/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Card = ({card}) => {
   

    const {id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color}= card ||{}

    
    return (
    <Link to={`/cards/${id}`}>
    
    <div className="card" >
           <div className="card bg-base-100 shadow-xl" style={{backgroundColor:card_bg_color}}>
  <figure><img src={picture} alt="Shoes" /></figure>
  
      <button className="text-start  w-max p-1 mt-3 mx-4 " style={{backgroundColor:category_bg_color}}>{category}</button>
   
  <div className="card-body">
    <h2 className="card-title -mx-5" style={{color:text_button_bg_color}} >{title}</h2>
    
  </div>
</div>
        </div>
    </Link>
    );
};

export default Card;
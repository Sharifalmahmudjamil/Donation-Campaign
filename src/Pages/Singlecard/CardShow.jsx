

const CardShow = ({card}) => {
    console.log(card)

    const {id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color,price,description}= card ||{}
    return (
        <div className="card " >
        <div className="card bg-base-100  shadow-xl" style={{backgroundColor:card_bg_color}}>
<figure><img className="lg:w-[1000px] lg:h-[400px] lg:relative" src={picture} alt="Shoes" /></figure>
<button className="btn  lg:absolute w-28 lg:mx-44 lg:mt-80"style={{backgroundColor:category_bg_color}}>Donation $ {price}</button>
<div className="card-body">
 <h2 className="card-title" style={{color:text_button_bg_color}} >{title}</h2>
 <p>{description}</p>
</div>
</div>
     </div>
    );
};

export default CardShow;
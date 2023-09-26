/* eslint-disable react/prop-types */

import swal from "sweetalert";


const CardShow = ({card}) => {
    // console.log(card)

    const {id, picture,title,category_bg_color,card_bg_color,text_button_bg_color,price,description}= card ||{}

    const handleAddToDonation =()=>{
        // console.log(card)

        const addedDonationArray = [];

    const donation = JSON.parse(localStorage.getItem("donation"));

    
    if (!donation) {
      addedDonationArray.push(card);
      localStorage.setItem("donation", JSON.stringify(addedDonationArray));
      swal("Good job!", "donation added successfully!", "success");
    } 
    
    else {


      const isExits = donation.find((card) => card.id === id);

      
      if (!isExits) {

        addedDonationArray.push(...donation, card);
        localStorage.setItem("donation", JSON.stringify(addedDonationArray));
        swal("Good job!", "Your donation added successfully!", "success");
       
      } else {
        swal("Error!", "You have already donated !", "error");
      }

    }

        
    };



    return (
        <div className="card " >
        <div className="card bg-base-100  shadow-xl" style={{backgroundColor:card_bg_color}}>
<figure><img className="lg:w-[1000px] lg:h-[400px] lg:relative" src={picture} alt="Shoes" /></figure>
<button onClick={handleAddToDonation} className="btn  lg:absolute w-28 lg:mx-44 lg:mt-80"style={{backgroundColor:category_bg_color}}>Donation $ {price}</button>
<div className="card-body">
 <h2 className="card-title" style={{color:text_button_bg_color}} >{title}</h2>
 <p>{description}</p>
</div>
</div>
     </div>
    );
};

export default CardShow;
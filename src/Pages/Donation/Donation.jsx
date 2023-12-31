import { useEffect, useState } from "react";


import DonationCard from "./DonationCard";
import { HelmetProvider } from "react-helmet-async";


const Donation = () => {

    

    const [donation,setDonation]=useState([])
    const [noFound,setNoFound]=useState(false)
    const [isShowAll,setIsShowAll]= useState(4)

    useEffect(()=>{
        const donation = JSON.parse(localStorage.getItem("donation"));

        if(donation){
            setDonation(donation);
        }
        else{
            setNoFound("No data Found")
        }
        
    },[])
    // console.log(donation)
    // console.log(isShowAll)

    return (
        
        <div>

            {noFound? <p className="text-5xl h-[80vh] flex justify-center items-center">{noFound}</p>: <div>

                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                {
                     
                     donation.slice(0,isShowAll).map(card => <DonationCard key={card.id} card={card}
                        ></DonationCard>)
                } 

                
                 
                 </div>
                 <div className={isShowAll ===donation.length && 'hidden'}>

                {
                    donation.length>4 &&(
                        <button onClick={()=>setIsShowAll(donation.length)} className="btn font-medium bg-green-500 block mx-auto mt-6 ">See All</button>
                    )
                       

                    
                }
                    
                    
                 </div>

                </div>}

                <HelmetProvider>
                <title>Donation Campaign || Donation</title>
            </HelmetProvider>
               
        </div>
    );
};

export default Donation;
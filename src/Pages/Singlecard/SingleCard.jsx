import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardShow from "./CardShow";


const SingleCard = () => {

    const [card,setCard]=useState({});


    const {id} = useParams();
    console.log(id)

    const cards = useLoaderData()
    console.log(cards)

    


    useEffect(()=>{


        const findCard = cards?.find((card) => card.id == id);
        console.log(findCard);
        setCard(findCard)
    },[id,cards])

    
    return (
      <div>
        <CardShow card={card}></CardShow>
      </div>
    );
};

export default SingleCard;
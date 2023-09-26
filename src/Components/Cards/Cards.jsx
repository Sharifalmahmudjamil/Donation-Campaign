import Card from "./Card";



const Cards = ({cards}) => {
    console.log(cards);
    return (
        <div className="py-10">
            <h1 className="text-3xl text-center font-semibold">all card</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto container">
            {
                cards?.map(card=><Card key={card.id} card={card}></Card>)
            }
        </div>
        </div>
        
    );
};

export default Cards;
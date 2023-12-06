import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Banner from "../../Components/Header/Banner/Banner";
import { HelmetProvider } from "react-helmet-async";


const Home = () => {

    const cards= useLoaderData();
    

    return (
        <div>
            <HelmetProvider>
                <title>Donation Campaign || Home</title>
            </HelmetProvider>
            <Banner cards={cards}></Banner>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;
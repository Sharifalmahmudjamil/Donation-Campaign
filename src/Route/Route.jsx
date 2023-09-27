import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import SingleCard from "../Pages/Singlecard/Singlecard";


const myCreatedRoute= createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('/cards.json')

            },
            {
                path:'/donation',
                element:<Donation></Donation>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>,
                loader: ()=> fetch('/cards.json')
            },
            {
                path:'/cards/:id',
                element:<SingleCard></SingleCard>,
                loader: ()=> fetch('/cards.json')
            }
        ]
    }
])

export default myCreatedRoute;
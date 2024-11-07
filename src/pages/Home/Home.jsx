import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = ( ) => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                     
                </div>
                
                <div className="md:col-span-2">
                   {
                      news.map(aNews =>  <NewsCard key={aNews._id} news={aNews}></NewsCard>)
   
                   }
                </div>
               
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;

/* const news = useLoaderData(); ...ayta import korbo 
    console.log(news) ....console a deko. akon console.log ta comment kore rako. erpor 

   <h2 className="text-4xl">News coming soon...</h2> ayta kete deo. erpor map koro avabe
                      
            {
            news.map(aNews =>  <NewsCard key={aNews._id} news={aNews}></NewsCard>)
   
            } 
            ... ay news take NewsCard.jsx er props bosabo. protita div teke border kete felbo.

                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                
                <div className="md:col-span-2 border">
                   {
                      news.map(aNews =>  <NewsCard key={aNews._id} news={aNews}></NewsCard>)
   
                   }
                </div>
               
                <div className="border">
                    <RightSideNav></RightSideNav>   go to NewsCard.jx

   Home button click korle  news.map is not a function dekay. uporer console.log ta uncomment koro.
   akon console.log  Home button click korle state ta chole asbe.  abar   Home button click korle
   
   news.map is not a function/ GET http://localhost:5173/news/news.json 404 (Not Found) atar somadan
   go to Router.jsx
*/
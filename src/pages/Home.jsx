import Header from "../shared/Header";
import LeftSide from "../shared/LeftSide";
import Navbar from "../shared/Navbar";
import RightNav from "../shared/RightNav";
import AnewsCard from "./AnewsCard";
import BrakingNews from "./BrakingNews";
import {useLoaderData} from"react-router-dom"

const Home = () => {
    const news=useLoaderData()
    
    return (
        
        <div >
            <div className="text-center"> 
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
            </div>
            <div className="grid gap-6 md:grid-cols-4 grid-cols-1 mx-auto">
                <div className=" border-2 border-solid">
                    <LeftSide></LeftSide>
                </div>
                <div className="lg:col-span-2 ">
                    {
                        news.map((newsinfo,idx)=><AnewsCard key={idx} newsinfo={newsinfo}></AnewsCard>)
                    }
                </div>
                <div className="">
                    <RightNav></RightNav>
                </div>
            </div>
           
        </div>
    );
};

export default Home;
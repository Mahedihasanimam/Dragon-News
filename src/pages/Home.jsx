import Header from "../shared/Header";
import LeftSide from "../shared/LeftSide";
import Navbar from "../shared/Navbar";
import RightNav from "../shared/RightNav";


const Home = () => {
    return (
        <div >
            <div className="text-center"> 
            <Header></Header>
            <Navbar></Navbar>
            </div>
            <div className="grid gap-6 md:grid-cols-4 grid-cols-1 mx-auto">
                <div className=" border-2 border-solid">
                    <LeftSide></LeftSide>
                </div>
                <div className="lg:col-span-2 border-2 border-solid">
                    <h1>middle comming soon</h1>
                </div>
                <div className="border-2 border-solid">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
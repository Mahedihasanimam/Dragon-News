import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import img1 from "../assets/qZone1.png"
import img2 from "../assets/qZone2.png"
import img3 from "../assets/qZone3.png"
const RightNav = () => {
  return (
    <div>
      <div className="p-4 ">
        <h3 className="font-bold text-xl">Login With</h3>
        <button className="btn rounded-sm mb-4 bg-transparent w-full border border-solid hover:text-blue-600">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn rounded-sm bg-transparent w-full border border-solid hover:text-blue-600">
          <FaGithub></FaGithub>
          Login With Github
        </button>

        {/* find us on  */}
        <div className="mt-12">
          <h3 className="font-bold text-xl">Find Us on</h3>
          <a href="#">
            <button className="btn rounded-sm rounded-t-lg bg-transparent w-full border border-gray-200 border-b-0 hover:text-blue-600">
              <FaFacebookF
                className="bg-[#cfddfb] text-blue-500 p-2 rounded-full"
                size={15}
              ></FaFacebookF>
              Facebook
            </button>
          </a>
          <a href="#">
            <button className="btn rounded-sm bg-transparent w-full border border-gray-200 border-b-0 hover:text-blue-600">
              <FaTwitter
                className="bg-[#cfddfb] mr-6 text-blue-500 p-2 rounded-full"
                size={15}
              ></FaTwitter>
              Twitter
            </button>
          </a>
          <a href="#">
            <button className="btn rounded-sm rounded-b-lg bg-transparent w-full border border-gray-200 hover:text-blue-600">
              <CiInstagram
                className="bg-[#cfddfb] text-blue-500 p-2 rounded-full"
                size={15}
              ></CiInstagram>
              InstaGram
            </button>
          </a>
        </div>
        </div>
        {/* Q zone  */}
        <div className="mt-8 bg-[#F3F3F3] p-1 ">
            <h3 className="font-bold text-xl p-3">Q-Zone</h3>
            <img className="w-fit" src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
      </div>
    
  );
};

export default RightNav;

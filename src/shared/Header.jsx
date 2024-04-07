import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div>
           
            <  img className=' lg:w-fit md:w-fit w-[200px]' src={logo} alt="" />
          
            <p className='text-xl font-normal opacity-70'>Journalism Without Fear or Favour</p>
            <h1 className="text-2xl font-semibold opacity-60">{moment().format("dddd, MMMM D, YYYY")}</h1>
        </div>
    );
};

export default Header;
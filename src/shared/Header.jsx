import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div>
            <  img src={logo} alt="" />
            <p className='text-xl font-normal opacity-70'>Journalism Without Fear or Favour</p>
            <h1 className="text-2xl font-semibold opacity-70">{moment().format("dddd, MMMM D, YYYY")}</h1>
        </div>
    );
};

export default Header;
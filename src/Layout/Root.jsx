

import { Outlet  } from "react-router-dom";
const Root = () => {
    return (
        <div className="max-w-[1140px] mx-auto font-popins px-2">
          
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
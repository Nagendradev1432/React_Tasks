import ChildOne from "../child1/childone"

// import Conditional from "../conditional/condition";

import Admin from "../Admin/admincomp";
import User from "../usercomp/usercomp";
function Parentcomp(props){
   return props.login =="admin"?<User/>:<Admin/>
}

export default Parentcomp;
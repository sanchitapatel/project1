
import {Link} from 'react-router-dom';

import'../../assets/style/index.css';


const Navbar =()=>{
    

return(
<>
<ul>
   
    <li><input type="text"/></li>
    <li><Link  to="/learn">Learn</Link></li>
    <li><Link  to="/reference">Reference</Link></li>
    <li><Link  to="/community">Community</Link></li>
    <li><Link  to="/blog">Blog</Link></li>
    
</ul>

</>
)   
}
export default Navbar;
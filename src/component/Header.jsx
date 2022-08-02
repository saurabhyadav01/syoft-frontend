import React from "react"
import {Link} from "react-router-dom"
export default function Header() {
  
  return (
    <React.Fragment>
   
<div style={{ justifyContent:"space-between",display:"flex", backgroundColor:"gray",border:"1px solid gray", height:"60px",width:"100%"}}>

<h4><Link to="/" style={{textDecoration:"none" ,color:"black",margin:"20px"}}>Memo</Link>
</h4>
<h4><Link to="/signIn" style={{textDecoration:"none" ,color:"black",margin:"20px"}}>Sign IN</Link>
<Link to="/signUp" style={{textDecoration:"none" ,color:"black" ,margin:"20px"}}>Sign UP</Link></h4>

</div>
    </React.Fragment>
  );
};


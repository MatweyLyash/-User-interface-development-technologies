import React, {FC, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";

type locProps={
    
    givePath:(str:string)=>void
}
  const Header:FC<locProps>= (props)=>{
      const location = useLocation();
    const {givePath} = props;
    useEffect(()=>{
        givePath(location.pathname)
        console.log(location.pathname);
    })
    
    return(
        <nav className="header">
            <ul>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/series">Series</Link>
                </li>
                <li>
                    <Link to="/cartoons">Cartoons</Link>
                </li>
                <li>
                    <Link to={"/all"}>All</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Header
//import React from 'react'
import { useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom"
import '../App.css'
const Navbar = () => {
    const [searchParams] = useSearchParams();
    let tol = searchParams.get("todo");
    //console.log(to)
    return (
        <nav>
            <NavLink to='/' className={tol== null ?
                "deactive" :
                ""}
                >All</NavLink><br />
            <NavLink to='/?todo=Active' className={tol === "Active" ? "deactive" : ""}>Active</NavLink><br />
            <NavLink to='/?todo=completed' className={tol === "completed" ? "deactive" : ""}>Completed</NavLink>
        </nav>
    )
}

export default Navbar
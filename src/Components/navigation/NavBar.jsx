import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

export default function NavBar(){
    return(
     <>
        <div className="flex px-4 justify-between items-center py-2 bg-slate-500">
            <Link to={"/"} className="navbar-brand text-white font-semibold text-xl p-2">GymRat</Link>
            <div className="flex space-x-5">
                <button><Link to={"/"} className="text-white font-semibold text-xl p-2">Home</Link></button>
                <button><Link to={"/products"} className="text-white font-semibold text-xl p-2">Products</Link></button>
                <button><Link to={"/contact"} className="text-white font-semibold text-xl p-2">Contact</Link></button>
                <CartWidget />
            </div>
        </div>


     </>
    );
}
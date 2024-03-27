import { FaShoppingCart } from "react-icons/fa";

export default function CartWidget(){
    return(
     <>
        <div className="flex items-center">
            <FaShoppingCart className="text-white h-6 w-6 cursor-pointer"/>
            <span className="text-white ml-1">5</span>
        </div>
     </>   
    )
}
import { useSelector } from "react-redux";
import type { RootType } from "./reduxStore";

const Header=()=>{

    const count=useSelector((state:RootType)=>state.cartCount.value)
    return (

        <>
            <div id="header">
                <img/>
                <div>
                    <a href="#">Home</a> <a href="#">Contactus</a>
                </div>
                <div>
                    Cart:{count}
                </div>
            </div>
        
        </>
    )
}
export default Header;

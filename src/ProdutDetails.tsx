import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "./CartCountSlice";
import type { RootType } from "./reduxStore";
import Header from "./Header";

const ProductDetails=()=>{
    const dispatch=useDispatch();

    const cartCount=useSelector((state:RootType)=>state.cartCount.value)

    return (

        <>
        <Header/>

            <div id="productDetails">
                <div>
                    <h3>Product Name</h3>
                    <div>Description of the product</div>
                </div>
                <div>
                    <h3>1200</h3>
                    Cart:{cartCount}
                    <button onClick={()=>dispatch(incrementByAmount(5))}>Add to Cart</button>
                </div>

            </div>
        
        </>
    )

}
export default ProductDetails;
import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"
import Heropage from "./Heropage";
import RecentProduct from "./RecentProduct";

const Home = () => {

    const { products } = useContext(ProductContext);
    return (
        <>
            <Heropage />
            <RecentProduct />
        </>
    )
}

export default Home
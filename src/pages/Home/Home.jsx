
import About from "./About";
import Heropage from "./Heropage";
import PopularProducts from "./PopularProducts";
import RecentProduct from "./RecentProduct";

const Home = () => {


    return (
        <>
            <Heropage />
            <RecentProduct />
            <About />
            <PopularProducts />
        </>
    )
}

export default Home
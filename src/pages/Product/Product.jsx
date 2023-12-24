import Navigation from "./Navigation"
import ProductSection from "./ProductSection"
import Recommended from "./Recommended"
import Sidebar from "./Sidebar/Sidebar"

const Product = () => {

    return (
        <div className="w-full min-h-screen flex ">
            <Sidebar />
            <div className="w-full px-4 py-2 ">

                <Navigation />
                <Recommended />
                <ProductSection />
            </div>

        </div>
    )
}

export default Product
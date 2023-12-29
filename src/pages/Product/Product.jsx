
import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"
import ProductCard from "../../Components/ProductCard";

const Product = () => {
    const { products } = useContext(ProductContext);
    return (

        <section className=" mx-auto container mt-[8rem] flex flex-wrap items-center justify-center  gap-10">
            {
                products.map((item) => {
                    return <div key={Math.random() * 100}>
                        <ProductCard
                            img={item.img}
                            title={item.title}
                            star={item.star}
                            reviews={item.reviews}
                            prevPrice={item.prevPrice}
                            newPrice={item.newPrice}
                        />
                    </div>
                })
            }
        </section>

    )
}

export default Product
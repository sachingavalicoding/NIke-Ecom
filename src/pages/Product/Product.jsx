import Card from "../../Components/Card/Card"
import data from "../../data"
const Product = () => {

    return (
        <div className="container mx-auto w-full h-screen flex ">
            <div className="w-[30%] min-h-screen bg-white">
                <h2> Filter </h2>
                <h2> Sort </h2>
            </div>
            <ul className=" w-[70%] grid grid-cols-2 gap-10 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    data.map((item) => {
                        return (
                            <Card key={Math.random() * 100}
                                img={item.img}
                                prize={item.newPrice}
                                title={item.title}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Product
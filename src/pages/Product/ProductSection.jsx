import { AiFillStar } from "react-icons/ai"
import { LuShoppingBag } from "react-icons/lu"
import data from "../../data"
const ProductSection = () => {
    return (
        <section className=" flex flex-wrap gap-x-4 gap-y-8 w-full items-center justify-center md:justify-start ">

            {
                data.map((item) => {
                    return (
                        <section className="card w-[16rem] h-[20rem] flex items-start justify-around flex-col border-2">
                            <img className="w-10/12" src={item.img} alt="shoes" />
                            <div>
                                <h3 className="font-bold text-[1.1rem] px-3 ">{item.title} </h3>
                                <div className="reviews flex gap-2 items-center text-yellow-400">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <span className="text-slate-800 font-semibold ">  {item.reviews}  </span>
                                </div>
                                <div className="flex gap-2 items-center justify-around">
                                    <p><del> {item.prevPrice}   </del> {item.newPrice} </p>
                                    <LuShoppingBag className="font-bold text-2xl text-purple-900" />
                                </div>
                            </div>
                        </section>
                    )
                })
            }



        </section>
    )
}

export default ProductSection
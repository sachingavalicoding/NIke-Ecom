import { AiFillStar } from "react-icons/ai"
import { LuShoppingBag } from "react-icons/lu"
const ProductCard = ({ img, title, reviews, newPrice, prevPrice }) => {
    return (
        <section className="card w-[16rem] h-[20rem] flex items-start justify-around flex-col border-2">
            <img className="w-10/12" src={img} alt="shoes" />
            <div>
                <h3 className="font-bold text-[1.1rem] px-3 ">{title} </h3>
                <div className="reviews flex gap-2 items-center text-yellow-400">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <span className="text-slate-800 font-semibold ">  {reviews}  </span>
                </div>
                <div className="flex gap-2 items-center justify-around">
                    <p><del> {prevPrice}   </del> {newPrice} </p>
                    <LuShoppingBag className="font-bold text-2xl text-purple-900" />
                </div>
            </div>
        </section>
    )
}

export default ProductCard
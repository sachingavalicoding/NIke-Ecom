
import { BsCartCheck } from "react-icons/bs";
const ProductCard = ({ img, title, star, reviews, newPrice, prevPrice }) => {
    return (
        <article className="w-[20rem] px-2 py-3 h-[20rem] shadow-lg flex flex-col justify-between">

            <img className="text-cetner w-5/6 " src={img} alt={title} />
            <div className="">
                <h3 className="font-bold text-xl text-slate-950"> {title} </h3>

                <span> {reviews} </span>
                <div className="flex items-center gap-3">
                    <div className="flex gap-2 text-yellow-400 mt-2">
                        {star}
                        {star}
                        {star}
                        {star}
                    </div>
                    <div className="flex  font-bold text-red-400  items-center justify-center">
                        <p className="flex gap-2"> <del> {prevPrice} </del> <span> ${newPrice} </span> </p>
                    </div>
                </div>

            </div>
            <div className="w-full flex items-center justify-center ">
                <button className="btn-sec w-full"> Add TO Cart  </button>
            </div>
        </article>
    )
}

export default ProductCard
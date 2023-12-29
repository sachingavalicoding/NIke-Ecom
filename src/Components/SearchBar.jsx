import { TiShoppingCart } from "react-icons/ti";
import { LuUserCircle2 } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";

const SearchBar = ({ handleInputChange, query }) => {
    return (
        <div className=" w-full  px-3 py-5 flex items-center  justify-center border-slate-800  gap-6 ">
            <input className=" border-gray-700 shadow-lg bg-slate-100 text-xl font-medium rounded-sm px-2 py-3 w-[30rem]  " type="text" placeholder=" Search What Your want..." />
            <div className="flex gap-4 items-center text-xl text-red-600
            "

            >
                <FiHeart />
                <LuUserCircle2 />
                <TiShoppingCart />

            </div>
        </div>
    )
}

export default SearchBar
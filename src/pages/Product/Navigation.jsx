import { TiShoppingCart } from "react-icons/ti";
import { LuUserCircle2 } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";

const Navigation = ({ handleInputChange, query }) => {
    return (
        <div className=" w-full  flex items-center justify-around px-3 py-5 border-slate-800  md:px-10  ">
            <input className="w-[15rem] border-gray-700 shadow-lg bg-slate-100 text-xl font-medium rounded-sm px-2 py-3 md: px-10 w-[30rem]  " type="text" placeholder=" Search What Your want..." />
            <div className="flex gap-4 items-center text-xl
            "

            >
                <FiHeart />
                <LuUserCircle2 />
                <TiShoppingCart />

            </div>
        </div>
    )
}

export default Navigation
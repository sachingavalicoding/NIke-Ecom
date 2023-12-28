import { TiShoppingCart } from "react-icons/ti";
import { LuUserCircle2 } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <header className="flex items-center fixed top-0 left-0 w-full  justify-around px-2 py-4 border-gray-200 bg-white shadow-lg font-bold">
            <h2 className="uppercase text-2xl"> Nike's Store </h2>
            <nav className="hidden md:flex gap-8  ">
                <a href="."> Home </a>
                <a href="."> Products </a>
                <a href="."> Contact </a>
                <a href="."> Contact </a>
            </nav>
            <div className="hidden md:flex gap-5 text-2xl ">
                <TiShoppingCart />
                <LuUserCircle2 />
            </div>
            <div className="md:hidden">
                <FaBars className="text-3xl" onClick={() => setShow(!show)} />
            </div>
            <div className={`${show !== true ? "hidden" : "w-screen h-screen flex flex-col  gap-3 px-5 py-5 bg-slate-50 backdrop-blur-sm z-10 fixed top-0 right-0 items-start justify-start "} `}>
                <div className="flex justify-around w-full gap-10 items-center ">
                    <h2 className="uppercase text-2xl "> Nike's Store </h2>
                    <RxCross2 className="text-3xl" onClick={() => setShow(!show)} />
                </div>
                <div className="flex gap-5 flex-col text-xl mt-8 font-normal  ">
                    <a href="."> Home </a>
                    <a href="."> Products </a>
                    <a href="."> Contact </a>
                    <a href="."> Contact </a>
                </div>
                <div className="flex gap-12 text-3xl mt-10 text-red-400 ">
                    <TiShoppingCart />
                    <LuUserCircle2 />
                </div>
            </div>
        </header >
    )
}

export default Navbar
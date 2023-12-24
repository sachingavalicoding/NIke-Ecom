import Category from "./Category"
import Colors from "./Colors"
import Price from "./Price"
import { TiShoppingCart } from "react-icons/ti"

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col w-[20rem] min-h-screen items-center  bg-slate-200 px-5 py-8  ">
      <TiShoppingCart className="text-3xl font-bold mb-16 mt-10 " />
      <Category />
      <Price />
      <Colors />
    </div>
  )
}

export default Sidebar
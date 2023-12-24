import Category from "./Category"
import Colors from "./Colors"
import Price from "./Price"
import { TiShoppingCart } from "react-icons/ti"

const Sidebar = ({ handleChange }) => {

  return (
    <div className="hidden md:flex flex-col w-[20rem] min-h-screen items-center  bg-slate-50 px-5 py-3 gap-10  ">
      <TiShoppingCart className="text-3xl font-bold mb-16 mt-10 " />
      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />
    </div>
  )
}

export default Sidebar
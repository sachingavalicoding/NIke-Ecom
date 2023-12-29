import Buttons from "./Buttons"

const Filters = () => {
    return (
        <div className="w-full flex items-center justify-center flex-col">
            <h3 className="font-bold text-2xl mb-4"> Filters </h3>
            <div className="flex gap-3 items-center mt-6 mb-4 flex-wrap">
                <Buttons value="" title="All Products " />
                <Buttons value="Nike" title="Nike" />
                <Buttons value="Adidas" title="Adidas" />
                <Buttons value="Puma" title="Puma" />
                <Buttons value="Vans" title="Vans" />
            </div>
        </div>
    )
}

export default Filters
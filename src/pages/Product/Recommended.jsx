import Buttons from "../../Components/Buttons"

const Recommended = ({ handleClick }) => {
    return (
        <>
            <h3 className="font-bold text-2xl mb-4"> Recommended </h3>
            <div className="flex gap-3 items-center mt-6 mb-4 flex-wrap">
                <Buttons onClickHandler={handleClick} value="" title="All Products " />
                <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
                <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
                <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
                <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
            </div>
        </>
    )
}

export default Recommended
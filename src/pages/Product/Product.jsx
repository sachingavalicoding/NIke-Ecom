import Navigation from "./Navigation"
import ProductSection from "./ProductSection"
import Recommended from "./Recommended"
import Sidebar from "./Sidebar/Sidebar"
import data from "../../data"
import { useState } from "react"
import ProductCard from "../../Components/ProductCard"
const Product = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    // ===========input filter ===========
    const [query, setQuery] = useState("");

    const handleInputChange = e => {
        setQuery(e.target.value);
    }

    const filterItems = data.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

    // ========radio filter ============

    const handleChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    //  ==========buttons filter =============

    const handleClick = (e) => {
        setSelectedCategory(e.target.value)
    }


    function filterData(data, selected, query) {
        let filterProducts = data;

        //filtering items 
        if (query) {
            filterProducts = filterItems;

        }

        if (selected) {
            filterProducts = filterProducts.filter(({ category, color, company, newPrice, title, prevPrice }) =>
                category === selected ||
                color === selected ||
                company === selected ||
                newPrice === selected ||
                title === selected
            );
        }
        return filterProducts.map(({ img, star, title, newPrice, reviews, prevPrice }) => {
            return <ProductCard img={img} star={star} title={title} newPrice={newPrice} reviews={reviews} prevPrice={prevPrice} />
        })
    }

    const result = filterData(data, selectedCategory, query);

    return (
        <div className="w-full min-h-screen flex ">
            <Sidebar handleChange={handleChange} />
            <div className="w-full px-4 py-2 ">
                <Navigation handleInputChange={handleInputChange} query={query} />
                <Recommended handleClick={handleClick} />
                <ProductSection result={result} />
            </div>

        </div>
    )
}

export default Product
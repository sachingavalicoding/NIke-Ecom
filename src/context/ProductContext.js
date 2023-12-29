import { createContext, useState, useEffect } from "react"
import data from "../data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const getData = () => {
            setProducts(data);
        }

        getData();

    }, [])


    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
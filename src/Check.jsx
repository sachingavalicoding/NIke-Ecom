
import { useEffect, useState } from "react";
import data from "./data"
const Check = () => {
    const [products, setProducts] = useState([]);
    const [input, setInput] = useState("");
    useEffect(() => {
        const filterData = (input) => {
            const NewData = data.filter((el => el.title.includes()));
            setProducts(NewData);
        }
        filterData();
    }, [setProducts])

    return (
        <div className="container border-2 bg-slate-100 flex items-center justify-center flex-col mx-auto px-5 py-6 ">

            <input
                type="text"
                placeholder="Search products...."
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
            {
                products.map((item) => {
                    return <article key={Math.random() * 1000}>
                        {`${item.title} = ${item.newPrice}`}
                    </article>
                })
            }
        </div>
    )
}

export default Check
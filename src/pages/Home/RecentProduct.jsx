import { AiFillStar } from "react-icons/ai"
import Card from "../../Components/Card"
const RecentProduct = () => {

    const data = [
        {
            img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
            title: "Nike Air Monarch IV",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "200",
            company: "Nike",
            color: "white",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
            title: "Nike Air Vapormax Plus",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$190,00",
            newPrice: "200",
            company: "Nike",
            color: "red",
            category: "sneakers",
        },

        {
            img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
            title: "Nike Waffle One Sneaker",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$130,00",
            newPrice: "200",
            company: "Nike",
            color: "green",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
            title: "Nike Running Shoe",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$180,00",
            newPrice: "200",
            company: "Adidas",
            color: "black",
            category: "sneakers",
        }
    ]
    return (
        <div className="mt-[2rem] w-full min-h-[50vh] flex flex-col gap-2 px-3 py-2 items-start justify-start ">
            <h3 className="font-bold shadow-sm"> LATEST DROPS </h3>
            <ul className="w-full h-3/4 grid grid-cols-2 gap-[3rem] px-5 py-3 lg:grid-cols-4 ">
                {
                    data.map((item) => <Card key={Math.random() * 100}
                        img={item.img}
                        title={item.title}
                        prize={item.prevPrice}
                    />)
                }
            </ul>
        </div>
    )
}

export default RecentProduct
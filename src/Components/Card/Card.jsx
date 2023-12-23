

const Card = ({ img, title, prize }) => {
    return (
        <article className="w-full flex flex-col gap-3 px-4 py-2 shadow-lg items-start justify-between">
            <img src={img} alt="" />
            <div>
                <h3 className=" text-xs">{title} </h3>
                <h3 className=" text-xs"> FROM  {prize} </h3>
            </div>
        </article>
    )
}

export default Card
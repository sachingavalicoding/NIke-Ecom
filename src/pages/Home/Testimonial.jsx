
const reviews = [
    {
        id: 1,
        name: "Sachin Gavali",
        email: "sachingavali@1930gmail.com",
        text: " jo bhi hain vahi hain bhai or khuch nahi yaar bas jo hain sab vahi hian yaar bahut maja hian yaar bahut chod diya hani bhai jaan "
    },
    {
        id: 2,
        name: "Sachin Gavali",
        email: "sachingavali@1930gmail.com",
        text: " jo bhi hain vahi hain bhai or khuch nahi yaar bas jo hain sab vahi hian yaar bahut maja hian yaar bahut chod diya hani bhai jaan "
    },
    {
        id: 3,
        name: "Sachin Gavali",
        email: "sachingavali@1930gmail.com",
        text: " jo bhi hain vahi hain bhai or khuch nahi yaar bas jo hain sab vahi hian yaar bahut maja hian yaar bahut chod diya hani bhai jaan "
    },
    {
        id: 4,
        name: "Sachin Gavali",
        email: "sachingavali@1930gmail.com",
        text: " jo bhi hain vahi hain bhai or khuch nahi yaar bas jo hain sab vahi hian yaar bahut maja hian yaar bahut chod diya hani bhai jaan "
    },
    {
        id: 5,
        name: "Sachin Gavali",
        email: "sachingavali@1930gmail.com",
        text: " jo bhi hain vahi hain bhai or khuch nahi yaar bas jo hain sab vahi hian yaar bahut maja hian yaar bahut chod diya hani bhai jaan "
    },
    {
        id: 6,
        name: "Sachin Gavali",
        email: "sachingavali@1930gmail.com",
        text: " jo bhi hain vahi hain bhai or khuch nahi yaar bas jo hain sab vahi hian yaar bahut maja hian yaar bahut chod diya hani bhai jaan "
    },

]
const Testimonial = () => {
    return (
        <div className="container mx-auto min-h-[30rem] gap-6 px-4 py-6 border-2 grid grid-cols-2">
            {
                reviews.map((el) => {
                    return <section className=" px-3 py-5 border-2 w-full bg-slate-400" key={el.id}>
                        <div>
                            <h2> {el.name}  </h2>
                            <span> {el.email}</span>
                        </div>
                        <p> {el.text}  </p>
                    </section>
                })
            }
            <button className="btn-sec"> PREV </button>
            <button className="btn-sec"> NEXT </button>
        </div>
    )
}

export default Testimonial
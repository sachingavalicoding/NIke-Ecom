
const Input = ({ handleChange, value, title, name, color }) => {
    return (
        <div className="flex gap-5 items-center">
            <input onChange={handleChange} className="text-xl bg-blue-700 font-bold" type="radio" name={name} value={value} />
            <label className="font-bold text-[1rem] "> {title}  </label>
        </div>
    )
}

export default Input
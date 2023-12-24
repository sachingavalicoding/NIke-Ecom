import Input from "../../../Components/Input"
const Price = ({ handleChange }) => {
    return (
        <div>
            <h3> Price </h3>
            <Input
                handleChange={handleChange}
                value={50}
                title="0$-50$"
                name="test2"
            />
            <Input
                handleChange={handleChange}
                value={100}
                title="50$-100$"
                name="test2"
            />
            <Input
                handleChange={handleChange}
                value={150}
                title="100$-150$"
                name="test2"
            />
            <Input
                handleChange={handleChange}
                value={200}
                title="150$-200$"
                name="test2"
            />
        </div>
    )
}

export default Price
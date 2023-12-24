import Input from "../../../Components/Input"


const Category = ({ handleChange }) => {
    return (
        <div>
            <h3> Category </h3>
            <Input
                handleChange={handleChange}
                value="sneakers"
                title="Sneakers"
                name="test"
            />
            <Input
                handleChange={handleChange}
                value="flats"
                title="Flats"
                name="test"
            />
            <Input
                handleChange={handleChange}
                value="sandals"
                title="Sandals"
                name="test"
            />
            <Input
                handleChange={handleChange}
                value="heels"
                title="Heels"
                name="test"
            />
        </div>
    )
}

export default Category
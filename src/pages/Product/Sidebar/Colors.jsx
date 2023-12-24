import Input from "../../../Components/Input"

const Colors = ({ handleChange }) => {
    return (
        <div>
            <h3> Colors  </h3>
            <Input
                handleChange={handleChange}
                value="black"
                title="Black"
                name="test1"
            />
            <Input
                handleChange={handleChange}
                value="red"
                title="Red"
                name="test1"
            />
            <Input
                handleChange={handleChange}
                value="blue"
                title="Blue"
                name="test1"
            />
            <Input
                handleChange={handleChange}
                value="green"
                title="Green"
                name="test1"
            />
            <Input
                handleChange={handleChange}
                value="white"
                title="White"
                name="test1"
            />
        </div>
    )
}

export default Colors
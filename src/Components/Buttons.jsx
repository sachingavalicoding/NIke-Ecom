

const Buttons = ({ onClickHandler, value, title }) => {
    return (
        <button className='btn-sec' onClick={onClickHandler} value={value} > {title} </button>
    )
}

export default Buttons
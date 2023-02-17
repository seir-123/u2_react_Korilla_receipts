import App from "../App"

const Receipt = (props) => {
    return (
        <div>
            <h2>Name: {props.person}</h2>
            <h4>Main: {props.main}</h4>
            <h4>Protein: {props.protein}</h4>
            <h4>Rice: {props.rice}</h4>
            <h4>Sauce: {props.sauce}</h4>
            <h4>Drink: {props.drink}</h4>
            <h5>Cost: {props.cost}</h5>
        </div>
    )
} 

export default Receipt
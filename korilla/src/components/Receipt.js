export default function Receipt(props) {
    if (!props.paid)
    return (
        <div>
            <h2>{props.person}</h2>
            <div className="listItems">
                <h4>Main: {props.order.main}</h4>
                <h4>Protein: {props.order.protein}</h4>
                <h4>Rice: {props.order.rice}</h4>
                <h4>Sauce: {props.order.sauce}</h4>
                <h4>Drink: {props.order.drink}</h4>
                <h4>Cost: ${props.order.cost}</h4>
            </div>
        </div>
    )
}
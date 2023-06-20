export default function Receipt(props) {
    return (
        <div>
            <h1> {props.person} </h1>
            <ul>
                <li> Main: {props.order.main} </li>
                <li> Protein: {props.order.protein} </li>
                <li> Rice: {props.order.rice} </li>
                <li> Sauce: {props.order.sauce} </li>
                <li> Drink: {props.order.drink} </li>
                <li> Cost: {props.order.cost} </li>
            </ul>
        </div>
    )
}
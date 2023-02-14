export default function Receipt(props) {
    <div>
        <h2>{props.person}</h2>
        <ul>
            <li>Main: {props.main}</li>
            <li>Protein: {props.protein}</li>
            <li>Rice: {props.rice}</li>
            <li>Sauce: {props.sauce}</li>
            <li>Drink: {props.drink}</li>
            <li>Cost: {props.cost}</li>
        </ul>
        </div>
}

export default function Receipt(props) {
    return (
        <div className="receipt-card">
            <h1> {props.person} </h1>
            <ul>
                <li><span className="label"> Main:</span> {props.order.main} </li>
                <li><span className="label"> Protein:</span> {props.order.protein} </li>
                <li><span className="label"> Rice:</span> {props.order.rice} </li>
                <li><span className="label"> Sauce:</span> {props.order.sauce} </li>
                <li><span className="label"> Drink:</span> {props.order.drink} </li>
                <li><span className="label"> Cost:</span> ${props.order.cost} </li>
            </ul>
        </div>
    )
}
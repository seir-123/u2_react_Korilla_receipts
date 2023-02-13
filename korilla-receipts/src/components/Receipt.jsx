

export default function Receipt(props){
    if (!props.paid){
        return (
            <div className = "receipt-Card">
                <h2>{props.person}</h2>
                <ul className = "order">
                    <li><span class="foodClass">Main:</span>{props.order.main}</li>
                    <li><span class="foodClass">Protein:</span>{props.order.protein}</li>
                    <li><span class="foodClass">Rice:</span>{props.order.rice}</li>
                    <li><span class="foodClass">Sauce:</span>{props.order.sauce}</li>
                    <li><span class="foodClass">Toppings:</span>{props.order.toppings.toString()}</li>
                    <li><span class="foodClass">Drink:</span>{props.order.drink}</li>
                    <li><span class="foodClass">Cost:</span>${props.order.cost}</li>
                </ul>
            </div>
    )
}}
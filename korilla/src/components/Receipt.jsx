const Receipt = (props) => {
    console.log(props);
    if (!props.paid) {
        return (
            <div className="receipt-card">
                <h2>{props.person}</h2>
                <p><span>Main:</span> {props.main}</p>
                <p><span>Protein:</span> {props.protein}</p>
                <p><span>Rice:</span> {props.rice}</p>
                <p><span>Sauce:</span> {props.sauce}</p>
                <p><span>Toppings:</span> {props.toppings.join(', ')}</p>
                <p><span>Drink:</span> {props.drink}</p>
                <hr className="divider" />
                <p className="total"><span>Total:</span> ${props.cost}</p>
            </div>
        )
    } 
}

export default Receipt
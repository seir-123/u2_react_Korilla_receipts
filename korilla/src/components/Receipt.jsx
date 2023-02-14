const Receipt = (props) => {
    console.log(props);
    if (!props.paid) {
        return (
            <div className="receipt-card">
                <h2>{props.person}</h2>
                <p><span>Main</span><br />{props.main}</p>
                <p><span>Protein</span><br />{props.protein}</p>
                <p><span>Rice</span><br />{props.rice}</p>
                <p><span>Sauce</span><br />{props.sauce}</p>
                <p><span>Toppings</span><br />{props.toppings.join(', ')}</p>
                <p><span>Drink</span><br />{props.drink}</p>
                <hr className="divider" />
                <p className="total">Total ${props.cost}</p>
            </div>
        )
    } 
}

export default Receipt
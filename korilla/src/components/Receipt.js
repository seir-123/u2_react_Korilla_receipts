
const Receipt = (props) => {

    return (
        <div className="receipt-card">
            <h2 style={{ color: 'violet'}}>{props.person}</h2>
            <p>Main: {props.main}</p>
            <p>Protein: {props.protein}</p>
            <p>Rice: {props.rice}</p>
            <p>Sauce: {props.sauce}</p>
            <p>Drink: {props.drink}</p>
            <p>Cost: ${props.cost}</p>
            
        </div>
    )

}

export default Receipt
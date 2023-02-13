
const Receipt = (props) => {

    return (props.paid) ? "" :(
        <div className="orderRec">
            <h2>{props.person}</h2>
            <p><span className="category">Main:</span> {props.main}</p>
            <p><span className="category">Protein:</span> {props.protein}</p>
            <p><span className="category">Rice:</span> {props.rice}</p>
            <p><span className="category">Sauce:</span> {props.sauce}</p>
            <p><span className="category">Drink:</span> {props.drink}</p>
            <p><span className="category">Cost:</span> {props.cost}</p>
            <p><span className="category">Toppings:</span> {props.toppings}</p>
        </div>
    )

}

export default Receipt
const Receipt = ({receipts}) => {
    const { person, order } = receipts.order
    const { main, protein, rice, sauce, drink, cost } = order

    return (
        <div className="Receipts">
            <h2> {person} Order: </h2>
            <p> Main: {main} ({protein}) </p>
            <p> Rice: {rice} </p>
            <p> Sauce: {sauce} </p>
            <p> Drink: {drink} </p>
            <p> Cost: ${cost} </p>
        </div>
    )
}

export default Receipt
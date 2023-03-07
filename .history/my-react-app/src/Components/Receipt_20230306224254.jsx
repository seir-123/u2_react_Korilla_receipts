const Receipt = ({receipt}) => {
    const { person, order } = receipt.order
    const { main, protein, rice, sauce, drink, cost } = order

    return (
        <div>
            <h2> {person} Order: </h2>
            <p> Main: {main} ({protein}) </p>
            <p> Rice: {rice} </p>
            <p> Sauce: {sauce} </p>
            <p> Drink: {drink} </p>
            <p> Cost: {cost} </p>
        </div>
    )
}

export default Receipt
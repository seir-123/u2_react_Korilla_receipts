const Reciept = (props) => {
    if (!props.paid) {
    return (
        <div>
            <h2>{props.person}</h2>
            <h3><span style={{color: 'blue'}}>Main: </span>{props.main}</h3>
            <h3><span style={{color: 'blue'}}>Protein: </span>{props.protein}</h3>
            <h3><span style={{color: 'blue'}}>Rice: </span>{props.rice}</h3>
            <h3><span style={{color: 'blue'}}>Sauce: </span>{props.sauce}</h3>
            <h3><span style={{color: 'blue'}}>Toppings: </span>{props.toppings}</h3>
            <h3><span style={{color: 'blue'}}>Drink: </span>{props.drink}</h3>
            <h3><span style={{color: 'blue'}}>Cost: </span>{props.cost}</h3>
        </div>
    )
    } 
}

export default Reciept
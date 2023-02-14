 const Receipt = (props) => {

    if (!props.paid) {return(
        
        <div>
            <h2>{props.person}</h2>
            <ul>    
                <li>Main: {props.main}</li>
                <li>Protein: {props.protein}</li>
                <li>Rice: {props.rice}</li>
                <li>Sauce: {props.sauce}</li>
                <li>Toppings: {props.toppings}</li>
                <li>Drink: {props.drink}</li>
                <li>Cost: ${props.cost}</li>
            </ul>
            <button className="pay-btn" onClick={()=>prompt("Meal on me if you give me a passing grade, otherwise enter social security # I mean credit card #")}>Pay Now</button>
        </div>

    )}else if(props.paid == true){
            return(
            <div>
                <h2>No open tab</h2>
                <button onClick={()=>alert(`nope`)}>Open new tab</button>
            </div>
         )}
    }


     

export default Receipt


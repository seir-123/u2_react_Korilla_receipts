
function ReceiptsComp(props){
  return(
    <div className="container">
      <div className="receiptSlots">
        <h2>{props.person}</h2>
        <ul>
          <li>Main:{props.main}</li>
          <li>Protien: {props.protein}</li>
          <li>Rice: {props.rice}</li>
          <li>Sauce: {props.sauce}</li>
          <li>Drink: {props.drink}</li>
          <li>Toppings: {props.toppings}</li>
          <li>Cost: {props.cost}</li>
        </ul>

  
        
      </div>
      
   
    </div>


  )


}



export default ReceiptsComp

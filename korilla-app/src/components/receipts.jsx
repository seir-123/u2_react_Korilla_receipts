
function Receipts(props){
  return(
    <div className="container">
      <div className="receiptSlots">
        <h1>{props.person}</h1>
        <ul>
          {/* {props.receiptsArr.order.forEach(element =>{
            console.log(element)
          })} */}
          <li>Main:{props.receiptsArr.receipts[0].order.main}</li>
          <li>Protien: {props.protein}</li>
          <li>Rice: {props.rice}</li>
          <li>Sauce: {props.sauce}</li>
          <li>Drink: {props.drink}</li>
          <li>Toppings: {props.toppings}</li>
          <li>Cost: {props.cost}</li>
 
        </ul>

      </div>

      <div>

{/* 
  let main
  let protein
  let rice
  let sauce
  let drink
  let toppings
  let cost

  for(let i=0;i<arr.length;i++){
    main = props.receiptsArr.receipts[i].order.main
    protein =receipts[i].order.protein
    rice =receipts[i].order.rice
    sauce =receipts[i].order.sauce
    drink =receipts[i].order.drink
    toppings= receipts[i].order.toppings
    cost =receipts[i].order.cost   
  }

} */}

      </div>
    </div>


  )


}



export default Receipts

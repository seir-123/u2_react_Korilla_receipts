const receipt = (props) => {
  if(!props.paid){
return (
    <div className="receipt">
      <div className="receipt-header">
        <h2>{props.person}'s Receipt</h2>
      </div>
      <div className="receipt-order">
        <p>Main: {props.main}</p>
        <p>Protein: {props.protein}</p>
        <p>Rice: {props.rice}</p>
        <p>Sauce: {props.sauce}</p>
        <p>Drink: {props.drink}</p>
        <p>Cost: ${props.cost}</p>
      </div>
    </div>
  )
}
}
export default receipt
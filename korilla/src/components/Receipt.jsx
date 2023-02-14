const Receipt = (props) => {
  
    return (
      <div className="div1">

    <h1>{props.person}</h1>
    <h5>Main: {props.main}</h5>
    <h5>Protein: {props.protein}</h5>
    <h5>Rice: {props.rice}</h5>
    <h5>Sauce: {props.sauce}</h5>
    <h5>Drink: {props.drink}</h5>
    <h5>Cost: ${props.cost}</h5>
    {/* <h5>{props.paid ? props.paid : "Not paid"}</h5> */}
     </div>
     
    )
  }
  
  export default Receipt
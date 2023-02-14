const Receipts = (props) => {
  return (props.paid) ? '' : ( //must pass props.paid into return, if (?) props.paid = true -> display nothing, else (:) -> display receipt
  <div className="receipt">
    <h2 className="person">{props.name}</h2>
    <p>Main: {props.main}</p>
    <p>Protein: {props.protein}</p>
    <p>Rice: {props.rice}</p>
    <p>Sauce: {props.sauce}</p>
    <p>Drink: {props.drink}</p>
    <p>Cost: {props.cost}</p>
  </div>
  )
};

export default Receipts

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
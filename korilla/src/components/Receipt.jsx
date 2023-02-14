const Receipts = (props) => {
  return (
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
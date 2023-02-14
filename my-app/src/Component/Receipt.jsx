const Receipt = (props) => {
  return (
    <div>
      <h1>{props.person}</h1>
      <h2>Main: {props.main}</h2>
      <h2>Protein: {props.protein}</h2>
      <h2>Rice: {props.rice}</h2>
      <h2>Sauce: {props.sauce}</h2>
      <h2>Drink: {props.drink}</h2>
      <h2>Cost: ${props.cost}</h2>
      


    </div>
  )}
  export default Receipt
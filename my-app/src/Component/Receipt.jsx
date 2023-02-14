const Receipt = (props) => {
  return (
    <div>
      <h1>{props.person}</h1>
      <h2 className="heading">Main: {props.main}</h2>
      <h2 className="heading">Protein: {props.protein}</h2>
      <h2 className="heading">Rice: {props.rice}</h2>
      <h2 className="heading">Sauce: {props.sauce}</h2>
      <h2 className="heading">Drink: {props.drink}</h2>
      <h2 className="heading">Cost: ${props.cost}</h2>
      


    </div>
  )}
  export default Receipt
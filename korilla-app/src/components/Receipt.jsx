const Receipt = (props) => {
  return !props.orderPaid ? (
    <div>
      <div className="Order">
        <div className="Person">{props.person}</div>
        <div>Main: {props.orderMain}</div>
        <div>Protein: {props.orderProtein}</div>
        <div>Rice: {props.orderRice}</div>
        <div>Sauce: {props.orderSauce}</div>
        <div>Toppings: {props.orderToppings}</div>
        <div>Cost: {props.orderCost}</div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Receipt;

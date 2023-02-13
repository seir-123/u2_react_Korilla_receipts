const Receipt = (props) => {
  return !props.orderPaid ? (
    <div>
      <div className="Order">
        <div className="Person">{props.person}</div>
        <div>
          <span>Main:</span> {props.orderMain}
        </div>
        <div>
          <span>Protein:</span> {props.orderProtein}
        </div>
        <div>
          <span>Rice:</span> {props.orderRice}
        </div>
        <div>
          <span>Sauce:</span> {props.orderSauce}
        </div>
        <div>
          <span>Toppings:</span> {props.orderToppings}
        </div>
        <div>
          <span>Cost:</span> {props.orderCost}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Receipt;

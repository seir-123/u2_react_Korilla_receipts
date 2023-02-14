import purchases from "./purchases.json"

const Receipts = () => {
  return(
    <div className="receipt-container">
      {purchases.map((data, key) => {
        if(data.paid == false){
          return(
            <div className="receipt-individual">
              <h2>{data.person}</h2>
              <h3><span>Main:</span> {data.order.main}</h3>
              <h3><span>Protein:</span> {data.order.protein}</h3>
              <h3><span>Rice:</span> {data.order.rice}</h3>
              <h3><span>Sauce:</span> {data.order.sauce}</h3>

              <h3 className="toppings"><span>Toppings: </span></h3>
              <ul>
                {data.order.toppings.map((topping, i) => {
                  return <li key={i}>{topping}</li>
                })}
              </ul>
              <h3><span>Drink:</span> {data.order.drink}</h3>
              <h3><span>Cost:</span> ${data.order.cost}</h3>
            </div>
          )
        }
      })}
    </div>

  )
}

export default Receipts

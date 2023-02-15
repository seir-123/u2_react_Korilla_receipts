import "./App.css";
import Person from './components/Person'

// PART I and II All cases included   
// Value disappear tested : first object disappears
// PLEASE SEE screenshots_answers folder for image proof 

let person3
const receipts = [
  {
    id: 1,
    person: "Jeremy",
    order: {
      main: "Burrito",
      protein: "Skirt Steak",
      rice: "Purple Rice",
      sauce: "Green Crack",
      toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
      drink: "Thai Iced Tea",
      cost: 22,
    },
    paid: false,
  },
  {
    id: 2,
    person: "Tiffany",
    order: {
      main: "Rice Bowl",
      protein: "Ginger Chicken",
      rice: "Sticky Rice",
      sauce: "Korilla",
      toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
      drink: "Korchata",
      cost: 19,
    },
    paid: false,
  },
  {
    id: 3,
    person: "Brittany",
    order: {
      main: "Salad Bowl",
      protein: "Organic Tofu",
      rice: "none",
      sauce: "K'lla",
      toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
      drink: "Sparkling Blood Orange Soda",
      cost: 20,
    },
    paid: false,
  },
  {
    id: 4,
    person: "Tylus",
    order: {
      main: "Burrito Bowl",
      protein: "Carnitas",
      rice: "yellow rice",
      sauce: "Jalapeno Honey",
      toppings: ["Grilled Corn", "Pico De Gallo", "Guacamole"],
      drink: "Pineapple Jarritos",
      cost: 23,
    },
    paid: true,
  },
];

const receiptNotPaid = (person, main, protein, rice, sauce, toppings, drink, cost) =>
  receipts.map((receipt, index) =>
    !receipt.paid ? (
      <ul className="person-order">
        <li id="list"><h2>{person =receipt.person}</h2></li>
        <li id="list"><h4>Main: {main=receipt.order.main}</h4></li>
        <li id="list"><h4>Protein: {protein=receipt.order.protein}</h4></li>
        <li id="list"> <h4>Rice: {rice=receipt.order.rice}</h4></li>
        <li id="list"><h4>Sauce: {sauce=receipt.order.sauce}</h4></li>
        <li id="list"><h4>Toppings: {toppings=receipt.order.toppings[0]}</h4></li>
        <li id="list"> <h4>Drink: {drink=receipt.order.drink}</h4></li>
        <li id="list"><h4>Cost: {cost=receipt.order.cost}</h4></li>
      </ul>
    ) : (
      ""
    )
  );
  

  const allReceipts = (person, main, protein, rice, sauce, toppings, drink, cost) =>
  receipts.map((receipt, index) =>
      <ul className="person-order">
        <li id="list"><h2>{person =receipt.person}</h2></li>
        <li id="list"><h4>Main: {main=receipt.order.main}</h4></li>
        <li id="list"><h4>Protein: {protein=receipt.order.protein}</h4></li>
        <li id="list"> <h4>Rice: {rice=receipt.order.rice}</h4></li>
        <li id="list"><h4>Sauce: {sauce=receipt.order.sauce}</h4></li>
        <li id="list"><h4>Toppings: {toppings=receipt.order.toppings[0]}</h4></li>
        <li id="list"> <h4>Drink: {drink=receipt.order.drink}</h4></li>
        <li id="list"><h4>Cost: {cost=receipt.order.cost}</h4></li>
      </ul>
  );

  const setItToPaid = (person, main, protein, rice, sauce, toppings, drink, cost, paid) =>{
    if(receipts[0].paid !== true){
      receipts[0].paid = true;
      person3 = receiptNotPaid()
      receipts[0].paid = false;
      return person3
    }
  
  }
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Korilla</h1>
      </header>
      <main>
        <div className="person"><Person  person1={allReceipts()} person2={receiptNotPaid()} person3={setItToPaid()}/></div>
      </main>
    </div>
  );
}
export default App;

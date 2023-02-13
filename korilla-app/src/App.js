import "./App.css";
import Receipt from "./components/Receipt";

function App() {
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
  return (
    <div className="App">
      <header className="App-header">
        <h1>Korilla</h1>
      </header>
      <div className="Receipts">
        {/* <Receipt
          person={receipts.map((receipt) => receipt.person)}
          orderMain={receipts.map((receipt) => receipt.order.main)}
          orderProtein={receipts.map((receipt) => receipt.order.protein)}
          orderRice={receipts.map((receipt) => receipt.order.rice)}
          orderSauce={receipts.map((receipt) => receipt.order.sauce)}
          orderDrink={receipts.map((receipt) => receipt.order.drink)}
          orderCost={receipts.map((receipt) => receipt.order.cost)}
          orderToppings={receipts.map((receipt) => receipt.order.toppings)}
          orderPaid={receipts.map((receipt) => receipt.paid)}
        /> */}
        <Receipt
          person={receipts[0].person}
          orderMain={receipts[0].order.main}
          orderProtein={receipts[0].order.protein}
          orderRice={receipts[0].order.rice}
          orderSauce={receipts[0].order.sauce}
          orderDrink={receipts[0].order.drink}
          orderCost={receipts[0].order.cost}
          orderToppings={receipts[0].order.toppings}
          orderPaid={receipts[0].paid}
        />
        <Receipt
          person={receipts[1].person}
          orderMain={receipts[1].order.main}
          orderProtein={receipts[1].order.protein}
          orderRice={receipts[1].order.rice}
          orderSauce={receipts[1].order.sauce}
          orderDrink={receipts[1].order.drink}
          orderCost={receipts[1].order.cost}
          orderToppings={receipts[1].order.toppings}
          orderPaid={receipts[1].paid}
        />
        <Receipt
          person={receipts[2].person}
          orderMain={receipts[2].order.main}
          orderProtein={receipts[2].order.protein}
          orderRice={receipts[2].order.rice}
          orderSauce={receipts[2].order.sauce}
          orderDrink={receipts[2].order.drink}
          orderCost={receipts[2].order.cost}
          orderToppings={receipts[2].order.toppings}
          orderPaid={receipts[2].paid}
        />
        <Receipt
          person={receipts[3].person}
          orderMain={receipts[3].order.main}
          orderProtein={receipts[3].order.protein}
          orderRice={receipts[3].order.rice}
          orderSauce={receipts[3].order.sauce}
          orderDrink={receipts[3].order.drink}
          orderCost={receipts[3].order.cost}
          orderToppings={receipts[3].order.toppings}
          orderPaid={receipts[3].paid}
        />
      </div>
    </div>
  );
}

export default App;

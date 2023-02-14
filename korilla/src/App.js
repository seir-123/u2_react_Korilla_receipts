import './App.css';
import Receipts from './components/Receipt'

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
      paid: true,
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
      paid: false,
    }
  ]
  return (
    <div className='Receipts'>
      <Receipts
      name = {receipts[0].person}
      main = {receipts[0].order.main}
      protein = {receipts[0].order.protein}
      rice = {receipts[0].order.rice}
      sauce = {receipts[0].order.sauce}
      drink = {receipts[0].order.drink}
      cost = {receipts[0].order.cost}
      toppings = {receipts[0].order.toppings}
      paid = {receipts[0].paid}/>
      <Receipts
      name = {receipts[1].person}
      main = {receipts[1].order.main}
      protein = {receipts[1].order.protein}
      rice = {receipts[1].order.rice}
      sauce = {receipts[1].order.sauce}
      drink = {receipts[1].order.drink}
      cost = {receipts[1].order.cost}
      toppings = {receipts[1].order.toppings}
      paid = {receipts[1].paid}/>
      <Receipts
      name = {receipts[2].person}
      main = {receipts[2].order.main}
      protein = {receipts[2].order.protein}
      rice = {receipts[2].order.rice}
      sauce = {receipts[2].order.sauce}
      drink = {receipts[2].order.drink}
      cost = {receipts[2].order.cost}
      toppings = {receipts[2].order.toppings}
      paid = {receipts[2].paid}/>
    </div>
    
  )
}

export default App;
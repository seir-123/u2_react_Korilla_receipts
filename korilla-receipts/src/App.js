import './App.css';
import Receipt from './components/Receipt.jsx'

function App() {
  const receipts = [
  {
    id: 1,
    person: 'Jeremy',
    order: {
      main: 'Burrito',
      protein: 'Skirt Steak',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
      drink: 'Thai Iced Tea',
      cost: 22,
    },
    paid: false,
  },
  {
    id: 2,
    person: 'Tiffany',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Chicken',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
      drink: 'Korchata',
      cost: 19,
    },
    paid: false,
  },
  {
    id: 3,
    person: 'Brittany',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20,
    },
    paid: false,
  },
  {
    id: 4,
    person: 'Tylus',
    order: {
      main: 'Burrito Bowl',
      protein: 'Carnitas',
      rice: 'yellow rice',
      sauce: "Jalapeno Honey",
      toppings: ['Grilled Corn', 'Pico De Gallo', 'Guacamole'],
      drink: 'Pineapple Jarritos',
      cost: 23,
    },
    paid: true,
  },
];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Korilla Receipts</h1>
      </header>
      <main>
      <div className = "receipt-container">
        <Receipt id = {receipts[0].id}
              person = {receipts[0].person}
              order = {receipts[0].order}
              toppings = {receipts[0].order.toppings}
              paid = {receipts[0].paid}
              />
        <Receipt id = {receipts[1].id}
              person = {receipts[1].person}
              order = {receipts[1].order}
              toppings = {receipts[1].order.toppings}
              paid = {receipts[1].paid}
              /> 
        <Receipt id = {receipts[2].id}
              person = {receipts[2].person}
              order = {receipts[2].order}
              toppings = {receipts[1].order.toppings}
              paid = {receipts[2].paid}
              /> 
        <Receipt id = {receipts[3].id}
              person = {receipts[3].person}
              order = {receipts[3].order}
              paid = {receipts[3].paid}
              /> 
        </div>
      </main>
  
    </div>
  );
}

export default App;

import Receipts from "./components/receipts";

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


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      
      <main>
        <div className="receipts">
            {/* <div className='receipt1'>
              <Receipts receiptsArr= {receipts} />
            </div> */}
            <div className='receipt2'>
              <Receipts
              person ={receipts[1].person}
              main ={receipts[1].order.main}
              protein ={receipts[1].order.protein}
              rice ={receipts[1].order.rice}
              sauce ={receipts[1].order.sauce}
              drink ={receipts[1].order.drink}
              toppings ={receipts[1].order.toppings}

              cost ={receipts[1].order.cost}            
              />
            </div>
            <div className='receipt3'>
              <Receipts
              person ={receipts[2].person}
              main ={receipts[2].order.main}
              protein ={receipts[2].order.protein}
              rice ={receipts[2].order.rice}
              sauce ={receipts[2].order.sauce}
              drink ={receipts[2].order.drink}
              toppings ={receipts[2].order.toppings}

              cost ={receipts[2].order.cost}            
              />
            </div>
            <div className='receipt4'>
              <Receipts
              person ={receipts[3].person}
              main ={receipts[3].order.main}
              protein ={receipts[3].order.protein}
              rice ={receipts[3].order.rice}
              sauce ={receipts[3].order.sauce}
              drink ={receipts[3].order.drink}
              toppings ={receipts[3].order.toppings}
              cost ={receipts[3].order.cost}    

              />
            </div>

          </div>
      </main>
    </div>
  );
}

export default App;
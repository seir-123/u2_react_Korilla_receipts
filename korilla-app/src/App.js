import ReceiptsComp from "./components/ReceiptsFile";

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
      
      <main>
        <h1>Korilla Receipts</h1>
        <div className="receipts-con">

          {receipts.map((receipt)=>{
            if(receipt.paid !== true){
            return(
              <div className="class">
                <ReceiptsComp
              paid ={receipt.paid}
              person ={receipt.person}
              main ={receipt.order.main}
              protein ={receipt.order.protein}
              rice ={receipt.order.rice}
              sauce ={receipt.order.sauce}
              drink ={receipt.order.drink}
              toppings ={receipt.order.toppings}
              cost ={receipt.order.cost}     
              />
            </div> 
            )}
          }

          )}
          


       
        
          </div>
      </main>
    </div>
  );
}

export default App;

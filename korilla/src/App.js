import './App.css';
import Receipts from "./components/receipts"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Korilla Receipts</h1>
      </header>
      <main>
        <Receipts />
      </main>
    </div>
  );
}

export default App;

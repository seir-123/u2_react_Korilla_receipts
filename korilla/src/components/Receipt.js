const Receipt = (props) => {

    return (
      <div>
      <h1>Name:{props.person}</h1> 
      <p>
    
   
       Main:{props.main}
        Protein:{props.protein}
        Rice:{props.protein}
        Sauce:{props.sauce}
        Drink:{props.drink}
        Cost:{props.cost}
        
      </p>
      <h2>Paid:</h2>
      </div>
    )
  }
  
  export default Receipt
const receipt = ({person,main,protein,rice,sauce,drink,cost}) => {
return (
    <div className="receipt">
      <div className="receipt-header">
        <h2>{person}'s Receipt</h2>
      </div>
      <div className="receipt-order">
        <p>Main: {main}</p>
        <p>Protein: {protein}</p>
        <p>Rice: {rice}</p>
        <p>Sauce: {sauce}</p>
        <p>Drink: {drink}</p>
        <p>Cost: ${cost}</p>
      </div>
    </div>
  );
};
export default receipt
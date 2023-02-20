function Receipt(props) {
    if(!props.status){
        return (
    <div>
        <h2>{props.person}</h2>
        <ul>
            <li><span id="type">Main:</span> <span id="text">{props.main}</span></li>
            <li><span id="type">Protein:</span> <span id="text">{props.protein}</span></li>
            <li><span id="type">Rice:</span> <span id="text">{props.rice}</span></li>
            <li><span id="type">Sauce:</span> <span id="text">{props.sauce}</span></li>
            <li><span id="type">Drink:</span> <span id="text">{props.drink}</span></li>
            <li><span id="type">Cost:</span> <span id="text">${props.cost}</span></li>
        </ul>
        </div>
    )
        } else {
            return <h1 id="check">PAID</h1>}


}

export default Receipt;
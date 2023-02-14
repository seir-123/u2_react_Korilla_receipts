function Receipt(props){if (props.receipts.paid){
    return(
        <div class="list">
            <h1>{props.receipts.person}</h1>
            <h3><span class = "hname">Main:</span> {props.receipts.order.main}</h3>
            <h3><span class = "hname">Protein:</span>{props.receipts.order.protein}</h3>
            <h3><span class = "hname">Rice:</span>{props.receipts.order.rice}</h3>
            <h3><span class = "hname">Sauce:</span>{props.receipts.order.sauce}</h3>
            <h3><span class = "hname">Drink:</span>{props.receipts.order.drink}</h3>
            <h3><span class = "hname">Cost:</span>{props.receipts.order.cost}</h3>
        </div>
    )
}
    else{
        return
    }

}





export default Receipt
export default function Receipt(props) {
    const list = []
    for (let i = 0; i < props.receipts.length; i++){
        if (!props.receipts[i].paid){
            list.push(
                <div className='block'>
                    <h2 className='name'>{props.receipts[i].person}</h2>
                    <h3 className='order'>
                        <p>Main: <span className='liN'>{props.receipts[i].order.main}</span></p>
                        <p>Protein: <span className='liN'>{props.receipts[i].order.protein}</span></p>
                        <p>Rice: <span className='liN'>{props.receipts[i].order.rice}</span></p>
                        <p>Sauce: <span className='liN'>{props.receipts[i].order.sauce}</span></p>
                        <p>Drink: <span className='liN'>{props.receipts[i].order.drink}</span></p>
                        <p>Cost: <span className='liN'>{props.receipts[i].order.cost}</span></p>
                    </h3>
                </div>
            )
        }
    }
    return list
}
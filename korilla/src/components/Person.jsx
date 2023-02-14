function Person (props) {
    return(
        <div className="">
            <div id="person1">
                <div><h1>PART I</h1></div>
                {props.person1}
            </div>
        <div className="">
            <div id="person2">
                <div><h1>PART II</h1></div>
                {props.person2}
            </div>
        </div>
        <div className="p3-cls">
            <div id="person3">
                <div><h1>PART II SET VALUE TO TRUE THEN RECEIPT DISAPPEARS</h1></div>
                {props.person3}
            </div>
        </div>
        </div>
        
    )
}
export default Person

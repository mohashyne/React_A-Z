// Fragment: we use fragment because a component cannot return more that one element.
// we can use div
//  we can use use <React.Fragment> </React.Fragment> or import fragment and use <fragment>
// We can also use <> </> instead of <React.Fragment> </React.Fragment>

// import { Fragment } from "react";

import { MouseEvent } from "react";
function ListGroup() {
    let items = [
    "Qatar", 
    "Dubai",
    "Kenya",
    "Uganda",
];

// we need to fix the typescript issue by importing mouseEvent
// Event handler
const handleClick = (event: MouseEvent) => console.log(event)

    return (
        <>
        <h1>List</h1>
        {/* {items.length === 0 ?  <p>No item found</p> : null} */}
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
        { items.map((item, index) => (
            // We need a unique key prop for a mapped item
        <li className="list-group-item" key={item} 
        // onClick={() => console.log(item, index)}
        onClick={handleClick} >
        {item}
        </li>
        ))}
        </ul>
      </>
    );
}


export default ListGroup;
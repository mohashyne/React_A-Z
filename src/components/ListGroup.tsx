// Fragment: we use fragment because a component cannot return more that one element.
// we can use div
//  we can use use <React.Fragment> </React.Fragment> or import fragment and use <fragment>
// We can also use <> </> instead of <React.Fragment> </React.Fragment>

// import { Fragment } from "react";
function ListGroup() {
    const items = [
    "Qatar", 
    "Dubai",
    "Kenya",
    "Uganda",
];

    return (
        <>
        <h1>List</h1>
        <ul className="list-group">
        { items.map(item => (
            // We need a unique key prop for a mapped item
        <li key={item} >{item}</li>
        ))}
        </ul>
      </>
    );
}


export default ListGroup;
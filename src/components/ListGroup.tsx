// Fragment: we use fragment because a component cannot return more that one element.
// we can use div
//  we can use use <React.Fragment> </React.Fragment> or import fragment and use <fragment>
// We can also use <> </> instead of <React.Fragment> </React.Fragment>

// import { Fragment } from "react";
function ListGroup() {
    return (
        <>
        <h1>List</h1>
        <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
      </>
    );
}


export default ListGroup;
//BOA PRÁTICA
import React from "react"; 

function ComponentB(props) {

    return (
        <div> Component B 
            <div>{props.children}</div>
            </div>
    )
}

export default ComponentB
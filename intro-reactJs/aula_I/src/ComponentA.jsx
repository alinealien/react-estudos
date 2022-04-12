//BOA PRÁTICA
import React, { Children } from "react"; 

function ComponentA(props) {

    return (
        <div>Component A
        <div>{props.Children}</div>
        </div>
    )
}

export default ComponentA
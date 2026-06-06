import React, { useState } from "react";

function mm(){
    const [name, setName] = useState();

    let Update = () => {
        setName("farhia")
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={Update}>SetName</button>
        </div>
    )
}
export default mm;
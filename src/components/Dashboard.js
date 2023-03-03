import React, { useState } from "react";
import Stock from "./Stock";
import data from "../data"

function Dashboard(props) {
    let [stock, setStock] = useState(data)


    return (
        <div>
            <Stock stock={stock} setStock={setStock} />            
        </div>
    )
}

export default Dashboard;
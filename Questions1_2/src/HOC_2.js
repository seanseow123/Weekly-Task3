import React from "react";
import HOC from "./HOC";

const HOC_2 = () => {
    return (
        <>
            <h1>Hi this is the 2nd HOC component</h1>
        </>
    )
};

export default HOC(HOC_2);
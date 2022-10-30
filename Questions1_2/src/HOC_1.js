import React from "react";
import HOC from "./HOC";

const HOC_1 = () => {
    return (
        <>
            <h1>Hi this is the 1st HOC component</h1>
        </>
    )
};

export default HOC(HOC_1);
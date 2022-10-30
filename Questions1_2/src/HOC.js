import React from "react";

const HOC = (BackColor) => {

    const color = ['blue', 'pink', 'red', 'purple', 'grey'];
    const ranColor = color[Math.floor(Math.random() * 5)];

    return () => {
        return(
            <div style={{ backgroundColor: ranColor}}>
                <BackColor />
            </div>
        )
    }
}

export default HOC;

import React from 'react';
import { Circle } from 'react-feather';

export default () => {
    const colorMap = [
        '#A63578',
        'teal',
        '#000000',
        'orange',
        'red',
        'green',
        'blue',
        'purple',
        'yellow',
    ];
    return(
        <>
            <h1>Color Demo</h1>

            <div className="demo">
                {
                    colorMap.map((color, index) => (
                        <Circle color={color} fill={color} key={index} size={128} /> 
                    ))
                }
            </div>
        </>
    )
};
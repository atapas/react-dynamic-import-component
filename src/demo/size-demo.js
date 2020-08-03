
import React from 'react';
import { Circle } from 'react-feather';

export default () => {
    const sizeMap = [
        '16',
        '32',
        '48',
        '64',
        '96',
        '128',
        '144'
    ];

    return(
        <>
            <h1>Size Demo</h1>

            
            <div className="demo">
                {
                    sizeMap.map((size, index) => (
                        <Circle color="black" fill="black" key={index} size={size} /> 
                    ))
                    
                }
            </div>
        </>
    )
};

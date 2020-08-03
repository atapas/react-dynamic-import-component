
import React from 'react';
import { Square, Triangle, Circle, Box, Heart, Hexagon } from 'react-feather';

export default () => {

    return(
        <>
            <h1>Shape Demo</h1>

            <div className="demo">
                <Square color="black" size={128} /> { ' '}
                <Triangle color="black" size={128} /> { ' '}
                <Circle color="black" size={128} /> { ' '}
                <Box color="black" size={128} /> { ' '}
                <Heart color="black" size={128} /> { ' '}
                <Hexagon color="black" size={128} /> { ' '}
            </div>
        </>
    )
};

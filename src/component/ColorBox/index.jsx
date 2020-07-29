import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './style.scss'

// ColorBox.propTypes = {

// };

const getRandomColor = () => {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'deeppink';
        return initColor;
    });

    const handlleBoxClick = () => {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box-color', newColor);
    }
    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handlleBoxClick}
        >
        </div>
    );
}

export default ColorBox;
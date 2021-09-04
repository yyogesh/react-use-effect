import React, { useState } from 'react';
import './Bulb.css';

function Bulb() {
    const [on, setOn] = useState(false);
    const lightOn = () => setOn(true);
    const lightOff = () => setOn(false);

    return (
        <div className="container">
            <div className={on ? "bulb-on" : "bulb-off"} />
            <button onClick={lightOn}>On</button>
            <button onClick={lightOff}>Off</button>
        </div>
    );
}

export default Bulb;

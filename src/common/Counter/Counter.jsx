
import React, {useState} from 'react';

export const Counter = () => {

    const [value, setValue] = useState(0);

    const Add = () => {
        setValue(value + 1);
    }

    const Substract = () => {
        setValue(value - 1);
    }

    return (
        <div>
            <button onClick={()=>Add()}>+</button>
                {value}
            <button onClick={()=>Substract()}>-</button>
        </div>
    )
}
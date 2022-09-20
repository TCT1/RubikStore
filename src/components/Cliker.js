import React, { useState } from 'react'

const Cliker = () => {
    const [counter, setCounter] = useState(0)
    const clickPlus = () => {
        setCounter(counter + 1)
    }

    const clickMinus = () => {
        if(counter > 0){
            setCounter(counter - 1)
        }
    }

    const clickDelete = () => {
        setCounter(counter - counter)
    }

    return (
        <div className='Counter'>
            <div className='m-5 counter__number'>{counter}</div>
            <button onClick={clickPlus} className='btn m-5 font-bold'>+</button>
            <button onClick={clickMinus} className='btn m-5 font-bold'>-</button>
            <button onClick={clickDelete} className='btn m-5 font-bold'>Delete</button>
        </div>
    )
}

export default Cliker
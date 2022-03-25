import React from 'react'

function Screen({split, verticalButtonHandler, horizontalButtonHandler, removeButtonHandler,color}) {
  return (
    <div style={{backgroundColor: `${color}`, height: '50vh'}}>
            <button onClick={verticalButtonHandler}>[v]</button>
            <button onClick={horizontalButtonHandler}>[h]</button>
            {
                split &&
                <button onClick={removeButtonHandler}>[-]</button>
            }
        </div>
  )
}

export default Screen
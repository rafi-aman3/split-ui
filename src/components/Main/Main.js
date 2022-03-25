import React, { useState } from 'react'
import { SplitPane } from 'react-multi-split-pane';
import Screen from '../Screen/Screen';
import './Main.css';

function Main() {
    const [split, setSplit] = useState(false);
    const [spitProperty, setSpitProperty] = useState('');

    const verticalButtonHandler = () => {
        setSplit(true);
        setSpitProperty('vertical');
    }

    const horizontalButtonHandler = () => {
        setSplit(true);
        setSpitProperty('horizontal');
    }

    const removeButtonHandler = () => {
        setSplit(false)
    }

  return (
      <>
      {
          split ?
          <SplitPane split={spitProperty}>
            <Screen 
                verticalButtonHandler={verticalButtonHandler}
                horizontalButtonHandler={horizontalButtonHandler}
                removeButtonHandler={removeButtonHandler}
                split={split}
                color="green"
            />
            <Screen 
                verticalButtonHandler={verticalButtonHandler}
                horizontalButtonHandler={horizontalButtonHandler}
                removeButtonHandler={removeButtonHandler}
                split={split}
                color="red"
            />

        </SplitPane> : <Screen 
                verticalButtonHandler={verticalButtonHandler}
                horizontalButtonHandler={horizontalButtonHandler}
                removeButtonHandler={removeButtonHandler}
                split={split}
                color="green"
            />
      }
      </>
  )
}

export default Main
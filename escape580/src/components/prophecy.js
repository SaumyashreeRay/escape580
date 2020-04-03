import React, {useLayoutEffect, useEffect, useCallback} from 'react';

export function Prophecy(props) {

    const handleExitClick = () => {
        props.exit();
    }

    const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

      const handleKey = useCallback((e) => {
           var event = window.event ? window.event : e;
              console.log(event);
           switch(e.key) {
           case "ArrowRight":
               handleViewChange('ending');
           console.log("right arrow key pressed");
           break;
           case "ArrowLeft":
           handleViewChange('enter');
           }
      }, [props]);

     useLayoutEffect(() => {
         document.addEventListener("keydown", handleKey);
               return function cleanup() {
               document.removeEventListener("keydown", handleKey);
             };
       });


    return (
      <div id="d-landing">
                  <h id="h-entrance" >
                        Welcome to Level Five
                  </h>
                  <p id="p-landing">
                    WHO IS THE PROPHECY ABOUT??????
                  </p>
                  <div id="d-button-holder">
                  <button id="b-landing">
                              Next
                              </button>
                              <button id="b-landing" onClick={handleExitClick}>
                               Exit Maze
                              </button>
                  </div>
                </div>
    );
}
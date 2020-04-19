import React, {useLayoutEffect, useEffect, useCallback} from 'react';

export function Sphinx(props) {
    

    const handleExitClick = () => {
        props.exit();
    }
    

    const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

      const handleKey = useCallback((e) => {
           var event = window.event ? window.event : e;
              console.log(event);
           switch(e.key) {
           case "ArrowRight":
              handleViewChange('riddle');
           console.log("riddle");
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
                        Welcome to Level Four
                  </h>
                  <p id="p-landing">
                    Sphinx: “You are very near your goal. The quickest way is past me, a powerful sphinx.”
                  </p>
                  <p>“So . . . so will you move, please?” </p>
                  <p>“No, not unless you can answer my riddle. Answer on your first guess — I let you pass. 
                    Answer wrongly — I attack. Remain silent — I will let you walk away from me unscathed. 
                    Press the right arrow to hear the riddle”
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
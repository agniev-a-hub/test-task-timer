import React from "react";
import "../styles.css"
import { useEffect, useState } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

const Timer = () => {
    const [sec, setSec] = useState(0);
    const [status, setStatus] = useState("stop");
 
    useEffect(() => {
        const unsubscribe$ = new Subject();
        interval(1000)
            .pipe(takeUntil(unsubscribe$))
            .subscribe(() => {
                if (status === "run") {
                setSec(val => val + 1000);
            }
        });
        return () => {
            unsubscribe$.next();
            unsubscribe$.complete();
        };
    }, [status]);
 
  const start = (event) => {
    setStatus("run");
  }
 
  const stop = (event) => {
    //double-click https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
    if (event.detail === 2){
      setStatus("stop")
    }
  }

  const reset = () => {
    setSec(0)
    setStatus("run")
  }

  return(
    <div className="timerClass">
      <div className="timerSpan"> {new Date(sec).toISOString().slice(11, 19)} </div>
        <div className="buttonsClass">
            <button className="buttonClass" onClick={start}>
                Start
            </button>
            <button className="buttonClass" onClick={stop}>
                //Stop
                Wait
            </button>
            <button className="buttonClass" onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Timer;

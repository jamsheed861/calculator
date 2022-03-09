import React, { useState } from "react";
import "./Cal.css";


function Calculator() {
  const [add, setadd] = useState("");
  
  
  function display(e) {
    setadd(add.concat(e.target.value));
  }
  function result() {
    try {
      setadd(eval(add).toString());
    } catch {
      setadd("error");
    }
  }
  const sqr = () => {
    setadd(Math.sqrt(add).toString());
  };
  const back = () => {
    setadd(add.slice(0, -1));
  };
  const clear = () => {
    setadd("");
  };

  return (
    <>
      <span className="my">This is my calculator</span>
      <div className="main">
        <div style={{ color: "white" }}>CASIO</div>
        <form>
          <input type="text" className="text" value={add} placeholder="0" />
        </form>

        <div className="keypad">
          <button id="highlight" type="button" value="c" onClick={back}>
            c
          </button>
          <button id="clear" type="button" value="clear" onClick={clear}>
            clear
          </button>
          <button type="button" value="/" onClick={display}>
            /
          </button>

          <button type="button" value="7" onClick={display}>
            7
          </button>
          <button type="button" value="8" onClick={display}>
            8
          </button>
          <button type="button" value="9" onClick={display}>
            9
          </button>
          <button type="button" value="*" onClick={display}>
            &times;
          </button>

          <button type="button" value="4" onClick={display}>
            4
          </button>
          <button type="button" value="5" onClick={display}>
            5
          </button>
          <button type="button" value="6" onClick={display}>
            6
          </button>
          <button type="button" value="-" onClick={display}>
            -
          </button>

          <button type="button" value="1" onClick={display}>
            1
          </button>
          <button type="button" value="2" onClick={display}>
            2
          </button>
          <button type="button" value="3" onClick={display}>
            3
          </button>
          <button id="plus" type="button" value="+" onClick={display}>
            +
          </button>
          <button type="button" value="." onClick={display}>
            .
          </button>
          <button type="button" value="sqrt" onClick={sqr}>
            sqrt                                             
          </button>
          <button type="button" value="%" onClick={display}>
            %
          </button>

          <button type="button" value="0" onClick={display}>
            0
          </button>
          <button type="button" value="00" onClick={display}>
            00
          </button>

          <button id="equal" type="button" value="=" onClick={result}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;

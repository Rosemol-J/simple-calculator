import React, { useState } from "react";
import "./calculator.css";
import { FaCopy, FaBackspace, FaUndo } from "react-icons/fa";

const Calculator = () => {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");
  const [undoList, setUndoList] = useState([]);

  //update the input

  const updateCal = (e) => {
    setCal(cal.concat(e.target.name));
  };

  const clear = () => {
    setCal("");
    setResult("");
  };

  //calculate the values
  function calculate(obj) {
    // eslint-disable-next-line no-new-func
    return Function('"use strict";return (' + obj + ")")();
  }

  const results = (item) => {
    let value;
    if (item === undefined) value = cal;
    else value = item;
    console.log(value, "valueeee");
    try {
      if (value.includes("sine"))
        setResult(Math.sin(value.split("sine")[1]).toString());
      else if (value.includes("cos"))
        setResult(Math.sin(value.split("cos")[1]).toString());
      else if (value.includes("tan"))
        setResult(Math.sin(value.split("tan")[1]).toString());
      else setResult(calculate(value).toString());
    } catch {
      setResult("Erorr");
    }
  };

  const copyText = () => {
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(result);

    /* Alert the copied text */
    alert("Copied the text: " + result);
  };

  const backSpace = () => {
    setCal(cal.slice(0, -1));
  };

  const undoOperation = () => {
    let prev = 0;
    if (cal.toString().length === 0) prev = undoList.length - 1;
    else prev = undoList.indexOf(cal.toString()) - 1;
    if (prev === -1) clear();
    else {
      setCal(undoList[prev]);
      results(undoList[prev]);
    }
  };
  return (
    <div className="calculator-screen">
      <div>
        <div className="calc-input">{cal || 0}</div>
        <div className="calc-answer">
          <span>{result || ""}</span>
        </div>

        <div className="calc-div">
          <div>
            <button className="sign-button" name="%" onClick={updateCal}>
              %
            </button>
          </div>

          <div className="button-div">
            <button className="sign-button" name="(" onClick={updateCal}>
              (
            </button>
          </div>

          <div className="button-div">
            <button className="sign-button" name=")" onClick={updateCal}>
              )
            </button>
          </div>

          <div className="button-div">
            <button className="sign-button" name="/" onClick={updateCal}>
              ÷
            </button>
          </div>
        </div>

        <div className="calc-div">
          <div className="button-div">
            <button className="number-button" name="7" onClick={updateCal}>
              7
            </button>
          </div>

          <div className="button-div">
            <button className="number-button" name="8" onClick={updateCal}>
              8
            </button>
          </div>

          <div className="button-div">
            <button className="number-button" name="9" onClick={updateCal}>
              9
            </button>
          </div>

          <div className="button-div">
            <button className="sign-button" name="*" onClick={updateCal}>
              ×
            </button>
          </div>
        </div>

        <div className="calc-div">
          <div className="button-div">
            <button className="number-button" name="4" onClick={updateCal}>
              4
            </button>
          </div>

          <div className="button-div">
            <button className="number-button" name="5" onClick={updateCal}>
              5
            </button>
          </div>

          <div className="button-div">
            <button className="number-button" name="6" onClick={updateCal}>
              6
            </button>
          </div>

          <div className="button-div">
            <button className="sign-button" name="-" onClick={updateCal}>
              -
            </button>
          </div>
        </div>

        <div className="calc-div">
          <div className="button-div">
            <button className="number-button" name="1" onClick={updateCal}>
              1
            </button>
          </div>

          <div className="button-div">
            <button className="number-button" name="2" onClick={updateCal}>
              2
            </button>
          </div>

          <div className="button-div">
            <button className="number-button" name="3" onClick={updateCal}>
              3
            </button>
          </div>

          <div className="button-div">
            <button className="sign-button" name="+" onClick={updateCal}>
              +
            </button>
          </div>
        </div>

        <div className="calc-div pd-b-1">
          <div className="button-div">
            <button className="number-button" onClick={clear}>
              CE
            </button>
          </div>

          <div className="button-div">
            <button className="number-button" name="0" onClick={updateCal}>
              0
            </button>
          </div>

          <div className="button-div">
            <button className="number-button" name="." onClick={updateCal}>
              .
            </button>
          </div>

          <div className="button-div">
            <button
              className="sign-button"
              onClick={() => {
                results();
                undoList.push(cal);
              }}
            >
              =
            </button>
          </div>
        </div>
        <div className="calc-div pd-b-1">
          <div className="button-div">
            <button className="extra-button" name="sine" onClick={updateCal}>
              Sine
            </button>
          </div>

          <div className="button-div">
            <button className="extra-button" name="cos" onClick={updateCal}>
              Cos
            </button>
          </div>

          <div className="button-div">
            <button className="extra-button" name="tan" onClick={updateCal}>
              Tan
            </button>
          </div>
          <div className="button-div">
            <button className="extra-button" onClick={copyText}>
              <FaCopy />
            </button>
          </div>
        </div>
        <div className="calc-div pd-b-1">
          <div className="button-div">
            <button className="extra-button" onClick={clear}>
              DEL
            </button>
          </div>
          <div className="button-div">
            <button className="extra-button" onClick={clear}>
              C
            </button>
          </div>
          <div className="button-div">
            <button className="extra-button" onClick={undoOperation}>
              <FaUndo />
            </button>
          </div>
          <div className="button-div">
            <button className="extra-button" onClick={backSpace}>
              <FaBackspace />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

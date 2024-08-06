"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./style.css");
var Button = function (props) {
    var label = props.label, onClick = props.onClick, disabled = props.disabled;
    return (<button onClick={onClick} className="button" disabled={disabled}>
            {label}
        </button>);
};
var Counter = function () {
    var inc = "inc";
    var reset = "reset";
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    var increment = function () { return setCount(count + 1); };
    var base = function () { return setCount(0); };
    var disabled = 5 === count;
    var unDisabled = 0 === count;
    return (<div className="wrapper">
            <h1 className="number">{count}</h1>
            <Button label={inc} onClick={increment} disabled={disabled}/>
            <Button label={reset} onClick={base} disabled={unDisabled}/>
        </div>);
};
var root = document.getElementById("root");
react_dom_1.default.createRoot(root).render(<Counter />);

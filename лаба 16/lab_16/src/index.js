"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
require("./style.css");
var Button = function (props) {
    var label = props.label, onClick = props.onClick, disabled = props.disabled;
    return (react_1.default.createElement("button", { onClick: onClick, className: "button", disabled: disabled }, label));
};
var Counter = function () {
    var inc = "inc";
    var reset = "reset";
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    var increment = function () { return setCount(count + 1); };
    var base = function () { return setCount(0); };
    var disabled = 5 === count;
    var unDisabled = 0 === count;
    return (react_1.default.createElement("div", { className: "wrapper" },
        react_1.default.createElement("h1", { className: "number", style: { color: disabled ? "red" : "cyan" } }, count),
        react_1.default.createElement(Button, { label: inc, onClick: increment, disabled: disabled }),
        react_1.default.createElement(Button, { label: reset, onClick: base, disabled: unDisabled })));
};
//
var root = react_1.default.createElement(Counter, null);
react_dom_1.default.render(root, document.getElementById('root'));
//# sourceMappingURL=index.js.map
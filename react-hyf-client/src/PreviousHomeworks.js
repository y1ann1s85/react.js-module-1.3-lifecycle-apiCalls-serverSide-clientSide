import React from 'react';
import ToDoDynamicW1 from "./w1/TodoDynamic";
import ToDoDynamicW2 from "./w2/TodoDynamic";
import "./style.css";

class PreviousHomeworks extends React.Component {
    render() {
        return (
            <div className="todo-list">
                <ToDoDynamicW1 />
                <ToDoDynamicW2 />
            </div>
        );
    }
}

export default PreviousHomeworks;
import React from 'react';
import ToDoStatic from "./TodoStatic";
import ToDoDynamic from "./TodoDynamic";

class App extends React.Component {

  render() {

    return (

      <div className="todo-list">
        <ToDoStatic description="Get out of bed" deadline="Wed Sep 13 2017" />
        <ToDoStatic description="Brush teeth" deadline="Thu Sep 14 2017" />
        <ToDoStatic description="Eat breakfast" deadline="Fri Sep 15 2017" />
        <br></br>
        <ToDoDynamic />
      </div>

    );

  }

}

export default App;

import React from 'react';
import ToDoDynamic from "./TodoDynamic";

class App extends React.Component {

  render() {
    return (
      <div className="todo-list">
        <br></br>
        <ToDoDynamic />
      </div>
    );
  }

}

export default App;

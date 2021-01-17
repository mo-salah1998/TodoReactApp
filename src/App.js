import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    todoList: [],
  };

  handleSubmit = (event) => {
    var taskDesc = event.target.elements.todos.value;
    if (taskDesc.length > 0) {
      this.setState({
        todoList: [...this.state.todoList, taskDesc],
      });
      event.target.reset();
    }
    event.preventDefault();
  };

  handleDelete = (event, index) => {
    var taskArray = [...this.state.todoList];
    taskArray.splice(index, 1);
    this.setState({ todoList: taskArray });
  };

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1 className="display-2">Todos App </h1>
          </div>
        </div>
        <form className="mb-3" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="todos"
              className="form-control"
              placeholder="Please entre your task "
              autocomplete="off"
            ></input>
            <div className="input-group-append">
              <button type="submit" className="btn btn-outline-success">
                Add
              </button>
            </div>
          </div>
        </form>
        <ul className="list-group">
          {this.state.todoList.map((item, index) => {
            return (
              <li className="list-group-item" key={index}>
                {item}
                <button
                  onClick={(event) => {
                    this.handleDelete(event, index);
                  }}
                  className="btn btn-outline-danger float-end"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
// wselt lel 14.55 a terminer

export default App;

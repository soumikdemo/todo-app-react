import React from "react";
import Header from "./Header";
import TodosList from "./TodosList";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
   };

  handleChange = (id) =>{
    //prevState for determining the correct state
    this.setState(prevState =>({
      todos: prevState.todos.map(todo => {
        if(todo.id === id){
          //to satisfy react-strict-mode
          return {
            ...todo,
            completed: !todo.completed,
          }
        }

        //array.map() returns an array
        return todo;
      })
    }));
  }

  delTodo = (id) => {
    this.setState({
      todos: [
        //spreading elements inside array
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  addTodoItem = (title) =>{
    const newItem = {
      id: uuidv4(),
      title: title,
      completed: false,
    }

    this.setState({
      todos: [ ...this.state.todos, newItem ]
    });
  }

  render() {
    return (
      <div>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo} />
      </div>
    )
  }
}
export default TodoContainer

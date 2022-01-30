import React from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
  state = {
    editing: false,
  }

  handleEditing = () =>{
    this.setState({
      editing: true,
    })
  }

  handleUpdatedDone = (e) =>{
    if(e.key === "Enter"){
      this.setState({ editing: false })
    }
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    //destructuring the 'todo' props
    const { id, title, completed } = this.props.todo;

    let viewMode = {}
    let editMode ={}

    if(this.state.editing){
      viewMode.display = "none"
    }else{
      editMode.display = "none"
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>
            Delete
          </button>
          <span style={this.props.todo.completed ? completedStyle : null}>
            {title}
          </span>
        </div>

        <input type="text" className={styles.textInput} style={editMode} value={title} onChange={(e)=>{this.props.setUpdate(e.target.value, id)}} onKeyDown={this.handleUpdatedDone} />
      </li>  
    )
  }
}

/* -----Function Component-------

function TodoItem(props) {
    return (
      <li>{props.todo.title}</li>  
    )
} */

export default TodoItem

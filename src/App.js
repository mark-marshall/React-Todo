import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoObject: [],
      taskTyped: ''
    };
  }

  onTaskTypeChange = event => {
    this.setState({
      taskTyped: event.target.value
    });
  };

  onAddClick = () => {
    this.setState(prevState => ({
      todoObject: prevState.todoObject.concat({
        task: prevState.taskTyped,
        id: prevState.todoObject.length + 1,
        completed: false
      })
    }));
    this.clearInputs();
  };

  onEnter = event => {
    if (event.key === 'Enter') {
      this.setState(prevState => ({
        todoObject: prevState.todoObject.concat({
          task: prevState.taskTyped,
          id: prevState.todoObject.length + 1,
          completed: false
        })
      }));
      this.clearInputs();
    }
  };

  onClearClick = () => {
    this.setState(prevState => ({
      todoObject: prevState.todoObject.filter(item => item.completed === false)
    }))
    this.reassignKeys();
  }

  onComplete = props => {
  this.setState(prevState => ({
    todoObject: prevState.todoObject.map(item => {
      if (item.id === props) {
        item.completed = !item.completed;
        return item;
      }
      else {
        return item
      }
    })
  }))
}

clearInputs = () => {
  this.setState({
    taskTyped: ''
  });
};

reassignKeys = () =>  {
  this.setState(prevState => ({
    todoObject : prevState.todoObject.map(item => {
      item.id = prevState.todoObject.indexOf(item); 
      return item;})
  }))
}

  render() {
    return (
      <div className="container">
        <h2>Let's get to work <span role="img" aria-label="octopus">🐙</span></h2>
        <ToDoList
          onComplete={this.onComplete}
          todoObject={this.state.todoObject}
        />
        <TodoForm
          typeValue={this.state.taskTyped}
          onTaskTypeChange={this.onTaskTypeChange}
          onAddClick={this.onAddClick}
          onEnter={this.onEnter}
          onClearClick={this.onClearClick}
        />
      </div>
    );
  }
}

export default App;

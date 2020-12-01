import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const todos = [
  {
    task:"guided project",
    id:1,
    done:false
  },
  {
    name:"module project",
    id:2,
    done:false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {todos}
  }

  handleToggle = (itemId)=>{
    this.setState({
      todos:this.state.todos.map(item =>{
        if(itemId === item.id){
          return({
            ...item,done:!item.done
          });
        }else{
          return(item);
        }
      })
    });
  }

  handleAdd = task =>{
    this.setState({
      todos:[...this.state.todos,{task: task, id: Date.now(),done:false}]
    });
  }

  handleDone = () => {
    this.setState({
      todos:this.state.todos.filter(item=>(!item.done))
    });
  }
 

  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleDone={this.handleDone} todos={this.state.todos} handleToggle={this.handleToggle}/>
        <TodoForm handleAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default App;

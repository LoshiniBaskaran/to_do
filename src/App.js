import React, {useState} from 'react';

import AddTask from './components/AddTask.jsx';
import UpdateTask from './components/UpdateTask.jsx';
import ToDo from './components/ToDo.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  const [list, setList] = useState([]);

  const [newTask, setNewTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');

  const addTask = () => {
    if(newTask) {
      let num = Date.now();
      let newEntry = { id:num, name:newTask, comp_status:false };
      setList([...list, newEntry]);
      setNewTask('');
    }
  }

  const delTask = (id) => {
    let newList = list.filter(task => task.id !== id);
    setList(newList);
  }

  const markComplete = (id) => {
    let newList = list.map( task => {
      if (task.id === id) {
        return ({...task, comp_status: !task.comp_status})
      }
      return (task)
    });
    setList(newList);
  }
  
  const editTask = () => {
    let newList = list.map( task => {
      if (task.id === updateTask.id) {
        return ({...task, name: updateTask.name})
      }
      return (task)
    });
    setList(newList);
    setUpdateTask('');
  }
  
  const cancelEditTask = () => {
    setUpdateTask('');
  }

  const changeTask = (e) => {
    let newEntry = {
      id: updateTask.id,
      name: e.target.value,
      comp_status: updateTask.comp_status
    }
    setUpdateTask(newEntry);

  }

  return (
    <div className="container App">
      <br/>
      <h3>To Do App</h3>
      <br/>
      <div>

        { updateTask && updateTask ? (
          <UpdateTask
            updateTask={updateTask}
            changeTask={changeTask}
            editTask={editTask}
            cancelEditTask={cancelEditTask}
          />) : (
          <AddTask
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />)}
        
        {list.length ? '' : 'No Task..'}

        <ToDo
          list={list}
          markComplete={markComplete}
          setUpdateTask={setUpdateTask}
          delTask={delTask}
        />

      </div>


    </div>
  );
}

export default App;

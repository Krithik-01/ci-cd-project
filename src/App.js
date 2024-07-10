import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!taskName.trim()) {
      setError(true);
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      name: taskName,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskName('');
    setError(false);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId) => {
    const editedTask = tasks.find(task => task.id === taskId);
    setTaskName(editedTask.name);
    handleDeleteTask(taskId);
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="wrapper">
          <input
            type="text"
            placeholder="Create notes...!!"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button className="add-btn" onClick={handleAddTask}>Add</button>
        </div>
        <div className="tasks">
          <p className="pending-tasks">You have <span className="count-value">{tasks.length}</span> task(s) to be done</p>
          {tasks.map(task => (
            <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                className="task-check"
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
              />
              <span className="taskname">{task.name}</span>
              <button className="edit" onClick={() => handleEditTask(task.id)}>
                <i className="fas fa-pen"></i>
              </button>
              <button className="delete" onClick={() => handleDeleteTask(task.id)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
        {error && <p className="error">Tasks cannot be empty</p>}

      </div>
      {/* {error && <p className="error">Tasks cannot be empty</p>} */}
    </div>
  );
};

export default App;

import './App.css';
import Input from './Components/Input';
import Box from './Components/Box';
import { useState } from 'react';

function App() {
  // empty array
  const [todos, setToDo] = useState([]);
  // remove todo function
    const removeToDo = (id) => {
      const newToDos = todos.filter((todoItem, index) => index !== id);
      setToDo(newToDos);
    };

  const addToDoHandler = (item) => {
    setToDo([
      ...todos,
      {
        item,
        currentTime: new Date().toLocaleTimeString(),
        currentDate: new Date().toLocaleDateString(),
        currentDay: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
      },
    ]);
    console.log(todos);
  };

  return (
    <div className= "bgColor p-3">
      <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white">
        <Input handler={addToDoHandler} />
        <Box data={todos} removeHandler={removeToDo}/>
      </div>
    </div>
  );
}

export default App;

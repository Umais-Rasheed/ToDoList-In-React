import React, { useRef } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Input(props) {
  const inputBox = useRef();

  const handleAddTask = () => {
    const inputValue = inputBox.current.value.trim(); // Trim whitespace from input value
    if (inputValue) { // Check if input value is not empty
      props.handler(inputValue);
      inputBox.current.value = "";
      toast.success(`List Added`, { autoClose: 1500 });
    } else {
      toast.error(`Please enter a task`, { autoClose: 1500 });
    }
  };

  return (
    <div className='p-3 flex justify-around'>
      <input 
        type="text" 
        placeholder='Enter your text Here...'
        className='p-3 focus:outline-none w-[90%] border border-blue-400 shadow-inner' 
        ref={inputBox}
      />
      <div 
        className='w-[50px] h-[50px] cursor-pointer bg-[#3038ac] rounded-[50%] text-3xl 
        text-white flex justify-center items-center' 
        onClick={handleAddTask} // Use handleAddTask function for onClick event
      >
        <div className='addicon'><AiOutlinePlus /></div>
        <ToastContainer />
      </div>
    </div>
  );
}

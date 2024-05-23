import '../App.css';
import React, { useState } from 'react';
import { BsTrash3 } from 'react-icons/bs';
import { toast } from 'react-toastify';

function Item(props, currentTime) {
  const [done, setDone] = useState(false);

  return (
    <div
      onClick={() => setDone(!done)}
      className={`select-none w-full border-b p-4 `}
    >
      <div className=' '>
        <span className='pr-2 text-[12px] text-slate-400'>
          {props.currentTime}
        </span>
        <span className='pr-2 text-[12px] text-slate-400'>
          {props.currentDay}
        </span>
        <span className='pr-2 text-[12px] text-slate-400'>
          {props.currentDate}
        </span>
      </div>
      <div className="flex cols-12 gap-4 justify-between align-baseline">
        <span className={`${done ? 'line-through' : ''} text-[20px] cursor-pointer`}>
            <p className='text-justify'>{props.item}</p>
        </span>
        <div></div>
          <div className='p-2 ' onClick={() =>
            { 
              toast.warn('List Deleted!', {
                autoClose: 1000,
              });
              props.removeHandler(props.id)
            }} >
          <BsTrash3 className='text-[#21446b] trashIcon cursor-pointer' />
          </div>
          
            


      </div>
    </div>
  );
}

export default Item;

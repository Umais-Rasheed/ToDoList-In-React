import React from 'react'
import Item from './Item'

function Box(props) {
  const items = props.data.map(

    (singleData, index) => {
      return <Item 
      removeHandler={props.removeHandler} 
      Key={index} 
      id={index} 
      item={singleData.item} 
      currentTime={singleData.currentTime} 
      currentDate={singleData.currentDate} 
      currentDay={singleData.currentDay}/>
    }
  )
  return (
    <div>
      {items}
    </div>
  )
}

export default Box
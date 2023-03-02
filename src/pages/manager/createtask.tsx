import React, { useState } from 'react'
function createTask() {
  return (
    <>
      <div className='bold-line'></div>
      <div className='container'>
        <div className='window'>
          <div className='overlay'></div>
          <div className='content'>
            <div className='welcome'>Create Task</div>
            <div className='subtitle'>Create a task for your new teammate!</div>
            <div className='input-fields'>
              <input
                type='text'
                placeholder='Task name'
                className='input-line full-width'
              ></input>
              <input
                type='email'
                placeholder='Task description'
                className='input-line full-width'
              ></input>
              <input
                type='text'
                placeholder='Video URL'
                className='input-line full-width'
              ></input>
              <input
                type='text'
                placeholder='Additional Info'
                className='input-line full-width'
              ></input>
            </div>
            <br></br>
            <div>
              <button className='ghost-round full-width'>Create Task</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default createTask

import React from 'react'

export const Success = () => {
  return (
    <div className='form-card'>
        <h2 className='fs-title text-center'>Success !</h2>
        <br></br>
        <div className='row justify-content-center'>
            <div className='col-3'>
            <img alt="success" src="https://img.icons8.com/color/96/000000/ok--v2.png" class="fit-image"/>
            </div>
        </div>
        <br></br>
        <div className='row justify-content-center'>
            <div className='col-7 text-center'>
                <h5>Response Successfully Submitted</h5>
            </div>
        </div>
    </div>
  )
}
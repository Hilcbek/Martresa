import React from 'react'

export const Items = ({my,data}) => {
  return (
    <div className={`my-${my} shadow p-2 rounded-md flex items-center justify-center flex-col mx-2`}>
        <div className='w-[100px] h-[100px]'>
            <img className='w-full h-full object-contain' src={data} alt="" />
        </div>
        <h1 className='font-bold text-sm w-9/12 text-center'>Smart Watch Apple - inc -1 T70 serices</h1>
        <p className='text-xs'>0 items</p>
    </div>
  )
}

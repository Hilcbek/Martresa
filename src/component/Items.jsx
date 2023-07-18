import React from 'react'

export const Items = ({my}) => {
  return (
    <div className={`my-${my} shadow p-2 rounded-md flex items-center justify-center flex-col mx-2`}>
        <div className='w-[100px] h-[100px]'>
            <img className='w-full h-full object-contain' src={'https://ca.roccat.com/cdn/shop/products/Syn-Max-Air_2x_0f9b98b7-c10d-4730-9188-02a0622c15ca_1100x.png?v=1654682509'} alt="" />
        </div>
        <h1 className='font-bold text-sm w-9/12 text-center'>Smart Watch Apple - inc -1 T70 serices</h1>
        <p className='text-xs'>0 items</p>
    </div>
  )
}

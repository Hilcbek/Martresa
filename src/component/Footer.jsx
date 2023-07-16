import React from 'react'

export const Footer = () => {
  return (
    <ul className='w-full flex items-start justify-start flex-col my-10'>
        <h1 className='mb-3 font-bold text-5xl font-Kreon xs:ml-3 lg:ml-52'>Links</h1>
        <div className='w-9/12 mx-auto flex items-start justify-between'>
            <ul className='flex items-center justify-start flex-col'>
                <li className='mb-3 font-bold text-xl font-Kreon'>About</li>
                <p className='cursor-pointer hover:text-black/90 my-1 font-bold text-xs text-zinc-500'>Sell With Us</p>
                <p className='cursor-pointer hover:text-black/90 my-1 font-bold text-xs text-zinc-500'>Terms & Conditions</p>
                <p className='cursor-pointer hover:text-black/90 my-1 font-bold text-xs text-zinc-500'>AffiliateFAQs</p>
            </ul>
            <ul className='flex items-center justify-start flex-col'>
                <li className='cursor-pointer hover:text-black/90 mb-3 font-bold text-xl font-Kreon'>Support</li>
            </ul>
            <ul className='flex items-center justify-start flex-col'>
                <li className='cursor-pointer hover:text-black/90 mb-3 font-bold text-xl font-Kreon'>Contact</li>
                <p className='cursor-pointer hover:text-black/90 my-1 font-bold text-xs text-zinc-500'>(+251) 91234567</p>
                <p className='cursor-pointer hover:text-black/90 my-1 font-bold text-xs text-zinc-500'>addis ababa ,Ethiopia</p>
            </ul>
        </div>
    </ul>
  )
}









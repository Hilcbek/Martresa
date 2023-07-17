import React, { useState } from 'react'
import { BiMenu, BiSolidUser} from 'react-icons/bi'
import {AiFillContacts, AiFillHome, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import {FiChevronDown, FiMenu} from 'react-icons/fi'
import {BsChevronCompactDown, BsChevronCompactRight, BsChevronUp, BsFillInfoCircleFill} from 'react-icons/bs'
import {IoCloseSharp} from 'react-icons/io5'
import {TiThMenu} from 'react-icons/ti'
import {FaBlog, FaHornbill} from 'react-icons/fa'
import { Items } from './Items'
import {motion} from 'framer-motion'
export const Header = () => {
    let [drop,setDrop] = useState(false)
    let [lang,setLang] = useState(false)
    let [dep,setDep] = useState(false)
    let [open,setOpen] = useState(false)
    let hovers = document.querySelectorAll('.hovers li')
    let langs = document.querySelector('.langs')
    hovers.forEach(hover => {
        hover.addEventListener('click',() => {
            Resetter()
            hover.classList.add('clicked')

        })
    })
    langs.addEventListener('click',() => {Resetter()})
    let Resetter = () => {
        hovers.forEach(hover => hover.classList.remove('clicked'))
        setDep(false)
        setLang(false)
    }
    let Reset = () => {
        hovers.forEach(hover => hover.classList.remove('clicked'))
        setLang(false)
    }
  return (
    <nav className='bg-[#fcb800] relative flex items-start justify-start flex-col xs:py-3 lg:py-0'>
        <div className='flex relative items-center justify-between w-full lg:pl-40 lg:pr-10 xs:py-1 lg:py-6 xs:px-5 lg:px-0'>
            <ul className={`${open ? 'left-0' : 'left-[-110%]'} transition_cubic lg:hidden h-screen absolute z-[999] top-[-12px] bg-[rgba(255,255,255,.95)] left-0 p-2 transition_cubic w-11/12 overflow-y-scroll overflow-x-auto shadow}`}>
               <div className='w-full flex items-center justify-end'>
                    <div onClick={() => setOpen(!open)} className='z-[999] p-1 w-10 h-10 rounded-full hover:bg-black/20 cursor-pointer flex items-center justify-center'>
                    <IoCloseSharp className='text-3xl' />
                </div>
               </div>
                <li className='my-2 flex items-center justify-start border-solid border-black/20 border-b-[2px] cursor-pointer hover:ml-2 py-2'><AiFillHome className='mr-1' />Home</li>
                <li className='my-2 flex items-center justify-start border-solid border-black/20 border-b-[2px] cursor-pointer hover:ml-2 py-2'><BsFillInfoCircleFill className='mr-1' />About</li>
                <li className='my-2 flex items-center justify-start border-solid border-black/20 border-b-[2px] cursor-pointer hover:ml-2 py-2'><AiFillContacts className='mr-1' />Contact</li>
                <li className='my-2 flex items-center justify-start border-solid border-black/20 border-b-[2px] cursor-pointer hover:ml-2 py-2'><FaHornbill className='mr-1' />Bill</li>
                <li className='my-2 flex items-center justify-start border-solid border-black/20 border-b-[2px] cursor-pointer hover:ml-2 py-2'><FaBlog className='mr-1' />Blog</li>
            </ul>
            <ul className='flex items-center xs:justify-center lg:justify-start xs:w-full lg:w-9/12'>
                 <li onClick={() => setOpen(!open)} className='lg:hidden w-10 h-10 rounded-full xs:hover:bg-black/50 lg:hover:bg-transparent group flex items-center justify-center'><FiMenu className='text-2xl xs:group-hover:text-white lg:group-hover:text-black cursor-pointer' /></li>
                <li className='lg:mr-10 xs:mx-2 lg:mx-0 xs:w-24 lg:w-auto'>
                    <img src="https://martretha.com/wp-content/uploads/2022/08/logo.png" alt="" />
                </li>
                <li className='xs:hidden lg:flex items-center justify-start ml-3 w-full bg-white rounded-[5px] relative'>
                    <input type="text" placeholder='Search in 20,000 products in Ethiopia...' className='font-Kreon p-3 rounded-[5px] text-sm tracking-wider outline-none w-full' />
                    <button onClick={() => setDrop(!drop)} className='mr-2 flex items-center justify-start font-bold text-xs font-Kreon tracking-wider'>Filter<FiChevronDown className={`cursor-pointer font-bold text-xl transition_cubic  ${drop ? '-rotate-180' : 'rotate-0'}`} /></button>
                    <ul className={`absolute top-[48.5px] z-[999] bg-white right-0 p-2 rounded-[5px] transition_cubic origin-top max-h-[225px] overflow-y-scroll shadow w-3/12 ${drop ? 'scale-100' : 'scale-0'}`}>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Man</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Clothing</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Toodler</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Women</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Kids</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Kids</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Kids</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Kids</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Kids</li>
                    </ul>
                    <button className='bg-[#050b26] text-white p-3 w-2/12 rounded-r-[5px]'>Search</button>
                </li>
            </ul>
            <ul className='flex items-center justify-start relative'>
                <li className='flex items-center justify-center mx-1 relative'>
                    <AiOutlineShoppingCart className='text-2xl' />
                    <p className='absolute -top-3 font-bold font-Kreon bg-red-500 w-5 h-5 rounded-full text-white flex items-center justify-center text-xs -right-2'>0</p>
                </li>
                <li className='flex items-center justify-center mx-1'>
                    <AiOutlineUserAdd className='text-2xl' />
                </li>
                <ul className='flex items-center justify-center mx-1 cursor-pointer' onClick={() => setLang(!lang)}>
                    <li className='w-10 h-10 mr-1'>
                        <img className='w-full h-full object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/2560px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png" alt="" />
                    </li>
                    <li className='flex items-center justify-start mx-1'>
                        <p className='font-Kreon tracking-wide'>En</p>
                        <FiChevronDown className='ml-1' />
                    </li>
                    <ul className={`absolute top-[40.5px] langs bg-white z-[999] right-2 p-2 rounded-[5px] transition_cubic origin-top max-h-[225px] w-full overflow-y-scroll shadow ${lang ? 'scale-100' : 'scale-0'}`}>
                        <li className='text-xs my-2 flex items-center justify-start border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'><img className='w-12 mr-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/2560px-Flag_of_Ethiopia.svg.png" alt="" /><span>Amharic</span></li>
                        <li className='text-xs my-2 flex items-center justify-start border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'><img className='w-12 mr-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/2560px-Flag_of_the_Czech_Republic.svg.png" alt="" /><span>Czech</span> </li>
                        <li className='text-xs my-2 flex items-center justify-start border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'><img className='w-12 mr-2' src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png" alt="" /><span>English</span></li>
                        <li className='text-xs my-2 flex items-center justify-start border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'><img className='w-12 mr-2' src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png" alt="" /> <span>Россия</span></li>
                        <li className='text-xs my-2 flex items-center justify-start border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'><img className='w-12 mr-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/800px-Flag_of_Serbia.svg.png" alt="" /><span>Српски</span></li>
                        <li className='text-xs my-2 flex items-center justify-start border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'><img className='w-12 mr-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/800px-Flag_of_Saudi_Arabia.svg.png" alt="" /><span>Saudi Arabian</span></li>
                    </ul>
                </ul>
            </ul>
        </div>
        <li className='lg:hidden xs:flex items-center justify-start ml-3 w-11/12 bg-white rounded-[5px] relative'>
                    <input type="text" placeholder='Search in 20,000 products in Ethiopia...' className='font-Kreon p-3 rounded-[5px] text-sm tracking-wider outline-none w-full' />
                    <button onClick={() => setDrop(!drop)} className='mr-2 flex items-center justify-start font-bold text-xs font-Kreon tracking-wider'>Filter<FiChevronDown className={`cursor-pointer font-bold text-xl transition_cubic  ${drop ? '-rotate-180' : 'rotate-0'}`} /></button>
                    <ul className={`absolute top-[48.5px] z-[999] bg-white left-1 p-2 rounded-[5px] transition_cubic origin-top max-h-[225px] overflow-y-scroll shadow w-full ${drop ? 'scale-100' : 'scale-0'}`}>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Man</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Clothing</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Toodler</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Women</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Kids</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Kids</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Kids</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Kids</li>
                        <li className='my-2 border-solid border-b-[1px] p-1 cursor-pointer hover:pl-2 transition_cubic font-semibold hover:text-black/60'>Kids</li>
                    </ul>
                    <button className='bg-[#050b26] flex items-center justify-center text-xs text-white py-4 px-1 w-2/12  rounded-r-[5px]'><AiOutlineSearch /></button>
                </li>
        <div className='w-full bg-white lg:block xs:hidden'>
            <div className='w-9/12 mx-auto py-2 flex items-center justify-between'>
                <div className={`mr-4 w-3/12 relative`}>
                    <button onClick={() =>  {setDep(!dep); Reset()}} className='group-hover:text-[#7d5e0a] flex items-center justify-start'>
                        <BiMenu className='text-xl' />
                        <p className='font-Kreon ml-2'>All Departments</p>
                    </button>
                    <div className={`${dep ? 'block' : 'hidden'} deps py-5 z-[999] w-[250px] rounded-sm p-2 px-3 absolute bg-white shadow hover:px-1`}>
                        <li className='group cursor-pointer group flex items-center justify-between my-1 border-solid border-zinc-300 py-2 border-b-[2px]'>
                            <p className='font-Kreon group-hover:text-zinc-600'>Furniture</p>
                            <BsChevronCompactRight className='' />
                            <ul className='group-hover:flex hidden items-start justify-start flex-col absolute w-[250px] top-0 -right-[250px] bg-white shadow p-2 rounded-sm'>
                                <li className='border-solid border-zinc-300 w-full py-2 border-b-[2px] flex items-center justify-between'>
                                    <p>Women</p>
                                    <ul className='second_hover hidden items-start w-full justify-start flex-col absolute top-5 -right-[250px] bg-white shadow p-2 rounded-md'>
                                        <li className='border-solid border-zinc-300 py-2 border-b-[2px] w-full flex items-center justify-between'>
                                            <p>Shoes</p>
                                            <ul className='third_hover hidden w-full items-start justify-start flex-col absolute top-5 -right-[250px] bg-white shadow p-2 rounded-md'>
                                                <li className='border-solid border-zinc-300 py-2 border-b-[2px] w-full flex items-center justify-between'><p>Skirts and hot suits</p><BsChevronCompactRight className='' /></li>
                                                <li className='border-solid border-zinc-300 py-2 border-b-[2px] w-full flex items-center justify-between'><p>Jackets & Sweaters</p><BsChevronCompactRight className='' /></li>
                                                <li className='border-solid border-zinc-300 py-2 border-b-[2px] w-full flex items-center justify-between'><p>Bra & underwear</p><BsChevronCompactRight className='' /></li>
                                            </ul>
                                            <BsChevronCompactRight className='' />
                                        </li>
                                        <li className='border-solid border-zinc-300 py-2 border-b-[2px] w-full flex items-center justify-between'><p>Jewelry</p><BsChevronCompactRight className='' /></li>
                                        <li className='border-solid border-zinc-300 py-2 border-b-[2px] w-full flex items-center justify-between'><p>babi</p><BsChevronCompactRight className='' /></li>
                                    </ul>
                                    <BsChevronCompactRight className='' />
                                </li>
                                <li className='border-solid border-zinc-300 py-2 border-b-[2px] w-full flex items-center justify-between'><p>Men</p><BsChevronCompactRight className='' /></li>
                                <li className='border-solid border-zinc-300 py-2 border-b-[2px] w-full flex items-center justify-between'><p>Children ( Age 3-10)</p><BsChevronCompactRight className='' /></li>
                            </ul>
                        </li>
                    </div>
                </div>
                <motion.div initial={{opacity : '0'}} animate={{opacity : '1' }} transition={{ duration: 0.5 }} className='hovers w-full flex items-center justify-between font-Kreon'>
                    <li className='flex first items-center justify-center mx-2 relative before:absolute before:left-0 before:-bottom-1 before:content-[""] before:bg-[#fcb800] before:w-0 hover:before:w-full cursor-pointer transition_cubic before:h-1 before:rounded-md'>Home</li>
                    <li className='flex items-center justify-center mx-2 relative before:absolute before:left-0 before:-bottom-1 before:content-[""] before:bg-[#fcb800] before:w-0 hover:before:w-full cursor-pointer transition_cubic before:h-1 before:rounded-md'>Shop</li>
                    <li className='flex items-center justify-center mx-2 relative before:absolute before:left-0 before:-bottom-1 before:content-[""] before:bg-[#fcb800] before:w-0 hover:before:w-full cursor-pointer transition_cubic before:h-1 before:rounded-md'>Brand Shops</li>
                    <li className='flex items-center justify-center mx-2 relative before:absolute before:left-0 before:-bottom-1 before:content-[""] before:bg-[#fcb800] before:w-0 hover:before:w-full cursor-pointer transition_cubic before:h-1 before:rounded-md'>Become Vendor</li>
                    <li className='flex items-center justify-center mx-2 relative before:absolute before:left-0 before:-bottom-1 before:content-[""] before:bg-[#fcb800] before:w-0 hover:before:w-full cursor-pointer transition_cubic before:h-1 before:rounded-md'>Become An Affiliate</li>
                    <li className='flex items-center justify-center mx-2 relative before:absolute before:left-0 before:-bottom-1 before:content-[""] before:bg-[#fcb800] before:w-0 hover:before:w-full cursor-pointer transition_cubic before:h-1 before:rounded-md'>Hot sales</li>
                </motion.div>
                <div className='w-3/12 ml-10'>
                    <button className='flex items-center group justify-center transition_cubic'>
                        <h1>Recent Viewed</h1>
                        <BsChevronCompactDown className={'ml-2 group-hover:rotate-180'} />
                        <div className='hidden grid-cols-5 absolute z-[999] group-hover:grid h-[200px] overflow-y-scroll top-[92%] transition_cubic left-48 w-[1100px] rounded-md shadow bg-white p-3'>
                            <Items my={'my-1'} />
                            <Items my={'my-1'} />
                            <Items my={'my-1'} />
                            <Items my={'my-1'} />
                            <Items my={'my-1'} />
                            <Items my={'my-1'} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </nav>
  )
}

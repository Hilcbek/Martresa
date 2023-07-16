import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {BsArrowUpRight} from 'react-icons/bs'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Styles/style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Marquee from "react-fast-marquee";
import times from "lodash/times";
import { Footer } from './Footer';
export const Home = () => {
  return (
    <div>
        <div className='lg:bg-[aliceblue]'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper transition-all duration-1000 ease-linear  w-full"
      >
        <SwiperSlide className='flex items-center xs:justify-center xs:flex-col lg:flex-row lg:justify-between lg:px-48'>
            <div className='lg:w-[400px] lg:h-[500px]'>
                <h1 className='xs:text-3xl lg:text-7xl font-Kreon font-bold'>ETHIOPIAN BIG MARKET</h1>
                <button className='bg-[#fcb800] text-black p-2 rounded-md cursor-pointer my-2 font-bold font-Kreon tracking-wider hover:tracking-widest'>Become a vender</button>
            </div>
            <div className='lg:w-[400px] lg:h-[500px]'>
                <img className='w-full h-full object-contain' src="https://prosteps.cloudimg.io/v7m/resizeinbox/1000x1000/fsharp0/https://tilroy.s3.eu-west-1.amazonaws.com/175/product/Runnerslab-ADIDAS-x-city-hoodie-heren-men-HR3286-black-online-kopen-2.png" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center xs:justify-center xs:flex-col lg:flex-row lg:justify-between lg:px-48'>
            <div className='lg:w-[400px] lg:h-[500px]'>
                <img className='w-full object-cover h-full' src="https://prosteps.cloudimg.io/v7m/resizeinbox/1000x1000/fsharp0/https://tilroy.s3.eu-west-1.amazonaws.com/175/product/Runnerslab-ADIDAS-own-the-run-jacket-heren-men-dark-blue-IC2636-loopjas-online-kopen-2.png" alt="" />
            </div>
            <div>
                <h1 className='xs:text-3xl lg:text-7xl font-Kreon font-bold'>ETHIOPIAN BIG MARKET</h1>
                <button className='bg-[#fcb800] text-black p-2 rounded-md cursor-pointer my-2 font-bold font-Kreon tracking-wider hover:tracking-widest'>Become a vender</button>
            </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center xs:justify-center xs:flex-col lg:flex-row lg:justify-between lg:px-48'>
            <div>
                <h1 className='xs:text-3xl lg:text-7xl font-Kreon font-bold'>ETHIOPIAN BIG MARKET</h1>
                <button className='bg-[#fcb800] text-black p-2 rounded-md cursor-pointer my-2 font-bold font-Kreon tracking-wider hover:tracking-widest'>Become a vender</button>
            </div>
            <div className='w-[400px] h-[500px]'>
                <img src="https://speedsports.pk/pub/media/catalog/product/cache/9d08971813a040f8f96067a40f75c615/h/l/hl1976_1_apparel_photography_front_view_transparent_5.png" alt="" />
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
        <div className='w-9/12 mx-auto font-Kreon flex items-center h-40 justify-start'>
            <h1 className='xs:text-xl lg:text-4xl mr-5'>Daily Flash Sale</h1>
            <div className='w-8 h-8 flex items-center justify-center  mx-1 bg-red-800 text-white rounded-full font-bold'>183</div>:
            <div className='w-8 h-8 flex items-center justify-center  mx-1 bg-red-800 text-white rounded-full font-bold'>44</div>:
            <div className='w-8 h-8 flex items-center justify-center  mx-1 bg-red-800 text-white rounded-full font-bold'>55</div>
        </div>
        <div className='w-9/12 mx-auto'>
            <Marquee className='py-4'>
                <div className='shadow p-2 rounded-md flex items-center justify-center flex-col mx-2'>
                    <div className='w-[150px]'>
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE53ref_VW_PF+watch-49-titanium-ultra_VW_PF_WF_SI+watch-face-49-alpine-ultra_VW_PF_WF_SI?wid=2000&hei=2000&fmt=png-alpha&.v=1683224241054" alt="" />
                    </div>
                    <h1 className='font-bold text-md w-9/12 text-center'>Smart Watch Apple - inc -1 T70 serices</h1>
                    <p>0 items</p>
                </div>
                <div className='shadow p-2 rounded-md flex items-center justify-center flex-col mx-2'>
                    <div className='w-[150px]'>
                        <img src="https://ca.roccat.com/cdn/shop/products/Syn-Max-Air_2x_0f9b98b7-c10d-4730-9188-02a0622c15ca_1100x.png?v=1654682509" alt="" />
                    </div>
                    <h1 className='font-bold text-md w-9/12 text-center'>Smart Watch Apple - inc -1 T70 serices</h1>
                    <p>0 items</p>
                </div>
                <div className='shadow p-2 rounded-md flex items-center justify-center flex-col mx-2'>
                    <div className='w-[150px]'>
                        <img src="https://www.iwatani.com/sites/default/files/products/2020-06/product-2-lg-b_0.png" alt="" />
                    </div>
                    <h1 className='font-bold text-md w-9/12 text-center'>Smart Watch Apple - inc -1 T70 serices</h1>
                    <p>0 items</p>
                </div>
                <div className='shadow p-2 rounded-md flex items-center justify-center flex-col mx-2'>
                    <div className='w-[150px]'>
                        <img src="https://egress.storeden.net/gallery/640af73f5fb8e0f4b1efdd31" alt="" />
                    </div>
                    <h1 className='font-bold text-md w-9/12 text-center'>Smart Watch Apple - inc -1 T70 serices</h1>
                    <p>0 items</p>
                </div>
                <div className='shadow p-2 rounded-md flex items-center justify-center flex-col mx-2'>
                    <div className='w-[150px]'>
                        <img src="https://ca.roccat.com/cdn/shop/products/Syn-Max-Air_2x_0f9b98b7-c10d-4730-9188-02a0622c15ca_1100x.png?v=1654682509" alt="" />
                    </div>
                    <h1 className='font-bold text-md w-9/12 text-center'>Smart Watch Apple - inc -1 T70 serices</h1>
                    <p>0 items</p>
                </div>
                <div className='shadow p-2 rounded-md flex items-center justify-center flex-col mx-2'>
                    <div className='w-[150px]'>
                        <img src="https://www.iwatani.com/sites/default/files/products/2020-06/product-2-lg-b_0.png" alt="" />
                    </div>
                    <h1 className='font-bold text-md w-9/12 text-center'>Smart Watch Apple - inc -1 T70 serices</h1>
                    <p>0 items</p>
                </div>
            </Marquee>
        </div>
        <button className='border-solid border-black border-[1px]  p-2 rounded-md font-Kreon mx-auto block my-5 text-xl tracking-wider hover:bg-[#fcb800] hover:tracking-widest'>Sell All Catagories</button>
        <div className='py-5 flex items-center justify-center flex-col'>
            <h1 className='font-Quicksand text-4xl font-bold mb-4'>Explore products</h1>
            <ul className='xs:grid grid-cols-3 lg:flex items-center justify-center'>
                <li className='text-center underline hover:underline font-bold font-Kreon mx-3 cursor-pointer'>Electronics</li>
                <li className='text-center hover:underline font-bold font-Kreon mx-3 cursor-pointer'>Clothing</li>
                <li className='text-center hover:underline font-bold font-Kreon mx-3 cursor-pointer'>Television and accessories</li>
                <li className='text-center hover:underline font-bold font-Kreon mx-3 cursor-pointer'>Furniture</li>
                <li className='text-center hover:underline font-bold font-Kreon mx-3 cursor-pointer'>Children ( Age 3-10)</li>
                <li className='text-center hover:underline font-bold font-Kreon mx-3 cursor-pointer'>Traditional & Religious</li>
                <li className='text-center hover:underline font-bold font-Kreon mx-3 cursor-pointer'>Others</li>
            </ul>
        </div>
        <button className='border-solid border-black border-[1px]  p-2 rounded-md font-Kreon mx-auto block my-5 text-xl tracking-wider hover:bg-[#fcb800] hover:tracking-widest'>See More</button>
        <div className='my-10 xs:grid grid-cols-1 lg:flex items-center justify-between xs:w-11/12 lg:w-9/12 mx-auto'>
            <div className='shadow rounded-xl xs:my-2 lg:my-0 lg:mx-2 lg:p-2 flex w-full items-center justify-center flex-col'>
                <div className='lg:w-[200px] xs:w-11/12 mx-auto lg:h-[180px]'>
                    <img className='w-full h-full object-contain' src="https://png.pngtree.com/png-clipart/20220930/original/pngtree-cargo-or-package-delivery-car-png-image_8643085.png" alt="" />
                </div>
                <h1 className='font-Kreon font-bold text-xl my-2'>Fast Delivery</h1>
                <p className='font-Kreon text-sm text-zinc-400'>Online Orders over $200</p>
            </div>
            <div className='shadow rounded-xl xs:my-2 lg:my-0 mx-2 p-2 flex w-full items-center justify-center flex-col'>
                <div className='lg:w-[200px] xs:w-11/12 mx-auto lg:h-[180px]'>
                    <img className='w-full h-full object-contain' src="https://static.vecteezy.com/system/resources/previews/021/008/084/original/hand-holding-money-dollars-png.png" alt="" />
                </div>
                <h1 className='font-Kreon font-bold text-xl my-2'>Money Pay Back</h1>
                <p className='font-Kreon text-sm text-zinc-400'>For all orders over $1000</p>
            </div>
            <div className='shadow rounded-xl xs:my-2 lg:my-0 mx-2 p-2 flex w-full items-center justify-center flex-col'>
                <div className='lg:w-[200px] xs:w-11/12 mx-auto lg:h-[180px]'>
                    <img className='w-full h-full object-contain' src="https://static.vecteezy.com/system/resources/previews/008/506/376/original/time-and-clock-line-24-hour-3d-gold-icons-illustration-free-png.png" alt="" />
                </div>
                <h1 className='font-Kreon font-bold text-xl my-2'>24 Hours Return</h1>
                <p className='font-Kreon text-sm text-zinc-400'>Clubcard points on every order</p>
            </div>
            <div className='shadow rounded-xl xs:my-2 lg:my-0 mx-2 p-2 flex w-full items-center justify-center flex-col'>
                <div className='lg:w-[200px] xs:w-11/12 mx-auto lg:h-[180px]'>
                    <img className='w-full h-full object-contain' src="https://static.vecteezy.com/system/resources/previews/021/819/302/original/beautiful-scissors-yellow-free-png.png" alt="" />
                </div>
                <h1 className='font-Kreon font-bold text-xl my-2'>International Delivery</h1>
                <p className='font-Kreon text-sm text-zinc-400'>International Delivery</p>
            </div>
        </div>
        <div className={'xs:w-11/12 lg:w-9/12 mx-auto flex items-start xs:justify-center xs:flex-col lg:flex-row lg:justify-between'}>
            <div className={'xs:w-11/12 lg:w-9/12 mx-auto  flex items-start justify-start flex-col'}>
                <div>
                    <img src="https://martretha-dde4ce7a61e7b5411235-20230715143220.local/wp-content/uploads/2020/10/banner-blog.png" alt="" />
                </div>
                <button className='flex items-center justify-center border-solid border-black border-[1px]  p-2 rounded-md font-Kreon my-5 text-xl tracking-wider hover:bg-[#fcb800] hover:tracking-widest group'>Sell All Catagories <BsArrowUpRight className={'ml-2 group-hover:ml-2'} /></button>
            </div>
            <div className={'xs:w-11/12 lg:w-3/12 h-[900px] shadow rounded-xl'}>
                <img className={'w-full h-full object-cover'} src="https://martretha-dde4ce7a61e7b5411235-20230715143220.local/wp-content/uploads/2022/04/Untitled-design-15.png" alt="" />
            </div>
        </div>
        <div className={'xs:w-11/12 lg:w-9/12 mx-auto flex items-start xs:justify-center xs:flex-col lg:flex-row lg:justify-between'}>
            <div className={'xs:w-11/12 lg:w-3/12 h-[900px] shadow rounded-xl'}>
                <img className={'w-full h-full object-cover'} src="https://martretha-dde4ce7a61e7b5411235-20230715143220.local/wp-content/uploads/2022/04/W-O-M-E-N-F-A-S-H-I-O-N.png" alt="" />
            </div>
            <div className={'xs:w-11/12 lg:w-9/12 flex items-center justify-start flex-col ml-5'}>
                <div>
                    <img className='w-full h-full object-cover' src="https://martretha-dde4ce7a61e7b5411235-20230715143220.local/wp-content/uploads/2020/10/banner-blog.png" alt="" />
                </div>
                <button className='flex items-center justify-center border-solid border-black border-[1px]  p-2 rounded-md font-Kreon my-5 text-xl tracking-wider hover:bg-[#fcb800] hover:tracking-widest group'>Sell All Catagories <BsArrowUpRight className={'ml-2 group-hover:ml-2'} /></button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

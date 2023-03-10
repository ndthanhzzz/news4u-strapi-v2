import React, { Component } from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default class Header extends Component {
  render() {
    return (
        <>
        <header className='flex flex-row justify-between border-solid border-2 border-b-blue-700 bg-white font-arial'> 
            {/* Title */}
            <Link className=' flex flex-row my-2 p-2 w-auto text-black hover:text-slate-400 font-bold text-xl' href='/'>
                <Image src="/favicon.ico" height={20} width={50} alt='cover'/>
                <div className='p-3'> NEWS 4U </div>
            </Link>
            {/* Search Box */}
            <div className='w-auto sm:w-1/3 flex justify-center p-3'>
                <div className="my-2 relative lg:block hidden text-gray-600">
                    <input className="border-2 border-gray-300 bg-white h-10 pl-2 pr-12 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Tìm kiếm bài viết,..." />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                        <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Login */}
            <div className='flex flex-row justify-center text-black w-auto'>
                <Link href='/sign-in' className='pt-8 px-2 hover:text-slate-400'>  Login </Link>
                <Link href='/sign-up' className='pt-8 px-2 hover:text-slate-400'>  Sign Up </Link>
            </div>
        </header>
        </>
    )
  }
}

import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { GiAtomicSlashes } from 'react-icons/gi'
import { MdArrowDropDown } from 'react-icons/md'

const Menu = [
    {
        name: "Episodes",
        link: "#/episodes"
    },
    {
        name: "Store",
        link: "#/store"
    },
    {
        name: "Toys",
        link: "#/toys"
    },
    {
        name: "3D videos",
        link: "#/videos"
    },
]

const Navbar = () => {
    return (
        <div data-aos='fade-down' className='container'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <GiAtomicSlashes className='text-6xl text-primary' />
                    <div className='flex flex-col text-2xl font-bold text-gray-600 leading-5'>
                        <span>Dora</span>
                        <span>emon</span>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <ul className='center'>
                        {
                            Menu.map((item, index) => (
                                <li key={index} className='navlink' ><a href={item.link}>{item.name}</a></li>
                            ))
                        }
                    </ul>
                </div>

                <div className='flex items-center gap-6'>
                    <input type="text" placeholder='Search' className='hidden sm:block text-gray-500 py-2 px-3 focus:outline-primary rounded-full bg-slate-200' />
                    <div className='bg-primary hover:bg-primary/80
                p-3 rounded-full cursor-pointer'>
                        <FaSearch className='text-white text-sm' />
                    </div>
                    <div className='navlink flex items-center cursor-pointer'>
                        ENG
                        <span>
                            <MdArrowDropDown className='text-primary text-xl' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
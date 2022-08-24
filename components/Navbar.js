import React, { useState } from 'react'

import tw from 'tailwind-styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../constants/images'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <navbar className='w-full flex justify-between items-center bg-black py-4 px-8'>
            <div className='flex justify-start items-center'>
                <img src={images.gericht.src} alt="app logo" className='w-[110px] lg:w-[150px] 3xl:w-[210px]' />
            </div>

            <ul className='hidden lg:flex flex-1 justify-center items-center list-none'>
                <Link>
                    <a href="#home">Home</a>
                </Link>
                <Link>
                    <a href="#about">About</a>
                </Link>
                <Link>
                    <a href="#menu">Menu</a>
                </Link>
                <Link>
                    <a href="#awards">Awards</a>
                </Link>
                <Link>
                    <a href="#contact">Contact</a>
                </Link>
            </ul>

            <div className='hidden sm:flex justify-end items-center'>
                <LoginLink href='#login'>Log In / Registration</LoginLink>
                <div className='w-px h-[30px] bg-grey' />
                <LoginLink href='/'>Book Table</LoginLink>
            </div>

            {/* smallscreen */}
            <div className='lg:hidden'>
                <GiHamburgerMenu className='text-white cursor-pointer' fontSize={27} onClick={() => setToggleMenu(!toggleMenu)} />
                <div className={`${toggleMenu ? 'flex' : 'hidden'} fixed transition animation-fade flex-col z-[5] top-0 left-0 w-full h-screen bg-black slide-bottom flex justify-center items-center`}>
                    <MdOutlineRestaurantMenu className='text-golden cursor-pointer absolute top-5 right-5' fontSize={27} onClick={() => setToggleMenu(!toggleMenu)} />
                    <ul className='list-none'>
                        <SmallScreenLink>
                            <a href="#home">Home</a>
                        </SmallScreenLink>
                        <SmallScreenLink>
                            <a href="#about">About</a>
                        </SmallScreenLink>
                        <SmallScreenLink>
                            <a href="#menu">Menu</a>
                        </SmallScreenLink>
                        <SmallScreenLink>
                            <a href="#awards">Awards</a>
                        </SmallScreenLink>
                        <SmallScreenLink>
                            <a href="#contact">Contact</a>
                        </SmallScreenLink>
                    </ul>
                </div>
            </div>
        </navbar>
    )
}

const Link = tw.li`text-white my-0 mx-4 cursor-pointer hover:text-grey font-alt`

const LoginLink = tw.a`text-white my-0 mx-4 cursor-pointer no-underline transition-[0.5] border-solid border-golden hover:border-b font-alt`

const SmallScreenLink = tw.li`m-8 text-golden font-base text-[2rem] text-center cursor-pointer hover:text-white`

export default Navbar
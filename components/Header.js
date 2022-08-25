import React from 'react'
import tw from 'tailwind-styled-components'
import images from '../constants/images'
import SubHeading from './SubHeading'

const Header = () => (
    <div className={`flex flex-col lg:flex-row bg-black justify-between min-h-screen items-center section__container`}>
        <div className='flex flex-col justify-start flex-1'>
            <SubHeading title="Chase the new flavour" />
            <HeaderTitle>The Key To Fine Dining</HeaderTitle>

            <p className='p__opensans'>
                Sit Tellus Lobortis Sed Senectus Vivamus Molestie.
                Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et,
                Penatibus Aliquam Amet Tellus
            </p>

            <button className='custom__button'>Explore Menu</button>
        </div>

        <div className='flex flex-1 justify-center items-center mt-20 lg:ml-8 lg:mt-0'>
            <img src={images.welcome.src} alt="header_img" className='w-full lg:w-[80%]' />
        </div>
    </div>
)

const HeaderTitle = tw.h1`
    text-golden
    font-base
    font-bold
    tracking-wider
    capitalize
    lt-xs:text-[50px]
    lt-xs:leading-[70px]
    lt-sm:text-[70px]
    lt-sm:leading-[87px]
    lt-lg:text-[90px]
    3xl:text-[180px]
    3xl:leading-[117px]
    text-[90px]
    leading-[117px]
`

export default Header
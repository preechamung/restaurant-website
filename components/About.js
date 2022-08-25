import React from 'react'
import images from '../constants/images'
import tw from 'tailwind-styled-components'

const About = () => (
    <div className='relative flex__center gericht__bg bg-gericht section__container'>
        <div className='flex__center absolute'>
            <img src={images.G.src} alt="G_overlay" className='w-[391] h-[415px] z-0' />
        </div>

        <div className='w-full flex__center z-[2] lt-md:flex-col'>
            <div className='flex-1 flex justify-end items-end flex-col text-right'>
                <HeadText>About Us</HeadText>
                <img src={images.spoon.src} alt="spoon__img" className='w-[45px]' />
                <p className='p__opensans text-grey'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quis pharetra adipiscing ultrices vulputate posuere tristique.
                    In sed odio nec aliquet eu proin mauris et.
                </p>
                <button type='button' className='custom__button'>Know More</button>
            </div>

            <div className='flex__center my-8 mx-16 lt-md:my-16 lt-md:mx-0'>
                <img src={images.knife.src} alt="spoon__img" className='h-[910px]' />
            </div>

            <div className='flex-1 flex justify-start items-start flex-col text-left'>
                <HeadText>Our History</HeadText>
                <img src={images.spoon.src} alt="spoon__img" className='w-[45px]' />
                <p className='p__opensans text-grey'>
                    Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat.
                    Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.
                </p>
                <button type='button' className='custom__button'>Know More</button>
            </div>
        </div>
    </div>
)

const HeadText = tw.h1`font-base text-golden text-[64px] leading-[83px] tracking-wider capitalize lt-xs:text-[45px] lt-xs:leading-[70px] font-bold`

export default About
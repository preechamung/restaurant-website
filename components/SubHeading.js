import React from 'react'
import images from '../constants/images'

const SubHeading = ({ title }) => (
    <div className='mb-4'>
        <p className='font-base text-[23px] text-white 3xl:text-[37px] 3xl:leading-[67px]'>{title}</p>
        <img className='w-[45px]' src={images.spoon.src} alt="spoon_image" />
    </div>
)

export default SubHeading
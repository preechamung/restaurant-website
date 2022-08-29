import React from 'react'
import images from '../constants/images'

const SubHeading = ({ title }) => (
    <div className='mb-4'>
        <p className='p__cormorant'>{title}</p>
        <img className='w-[45px]' src={images.spoon.src} alt="spoon_image" />
    </div>
)

export default SubHeading
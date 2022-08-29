import React from 'react'
import tw from 'tailwind-styled-components'
import images from '../constants/images'
import data from '../constants/data'


const SpecialMenu = () => (
    <div className='flex flex-col bg-black items-center py-16 px-24 lt-xs:px-8 lt-sm:px-8 lt-md:px-16 flex__center'>
        <div className='text-center mb-8'>
            <div className='mb-4'>
                <p className='p__cormorant'>Menu That Fits Your Palatte</p>
                <img className='w-[45px] inline' src={images.spoon.src} alt="spoon_image" />
            </div>
            <h1 className='headtext__cormorant'>Today's Special</h1>
        </div>

        <div className='flex flex-row lt-md:flex-col w-full'>
            <MenuSection>
                <p className='menu__heading'>Wine & Beer</p>
                <SubMenu>
                    {data.wines.map((wine, index) => (
                        <Item>{wine.title}</Item>
                    ))}
                </SubMenu>
            </MenuSection>
            <div className='w-[410px] mx-8'>
                <img src={images.menu.src} alt="menu" />
            </div>
            <MenuSection>
                <p className='menu__heading'>Cocktails</p>
                <SubMenu></SubMenu>
            </MenuSection>
        </div>
    </div>
)

const MenuSection = tw.div`flex flex-col flex-1 w-full flex__center`

const SubMenu = tw.div`flex flex-col my-8 w-full`

const Item = tw.div`w-full my-4 flex flex-col`

const ItemHead = tw.div`w-full my-4 flex flex-col`

const ItemSub = tw.div`w-full my-4 flex flex-col`



export default SpecialMenu
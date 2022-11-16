import React from 'react'
import { BsChevronLeft } from "react-icons/bs"

const PageNums = () => {
    return (
        <div className='my-5 space-x-20  bg-[#552b0d] p-2 rounded-md flex items-center justify-between max-w-sm text-white'>
            <BsChevronLeft/>
            <div className='flex space-x-6'>
                <p className='text-[#602e0b] bg-white w-5 rounded-md flex items-center justify-center font-semibold'>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
            </div>
            <BsChevronLeft className='rotate-180' />
        </div>
    )
}

export default PageNums
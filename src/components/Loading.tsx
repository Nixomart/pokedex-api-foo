import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'

export default function Loading() {
  return (
    <div className='w-screen h-screen flex'>
        <AiOutlineLoading  className='text-xl m-auto animate-spin' />

    </div>
  )
}

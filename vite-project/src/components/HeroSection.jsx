import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
const HeroSection = () => {
  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 my-10'>
        <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>ESD Major Project</span>
        <div className='mt-[50px]'>
        <h1 className='text-[70px] font-bold'>Admin <br/> and  <span className='text-[#6A38C2]'> Student Portal</span></h1>
        <p className=' font-bold'>Porject Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, cumque.</p>
        </div>
       </div>
    </div>
  )
}

export default HeroSection
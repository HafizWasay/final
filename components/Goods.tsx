import React from 'react'
import weight from "@/assets/goods/weight.jpg"
import bp from "@/assets/goods/blood pressure.jpg"
import diab from "@/assets/goods/diabetes.jpg"
import Image from 'next/image'
import { Button } from './ui/button'
export function Goods () {
  return (
    <div className='mt-[16px] flex flex-col items-center justify-cente gap-y-[16px]'>
       <div className='h-[485px]'>
           <Image src={weight} alt=''/>
       </div>
       <div className='flex gap-x-[32px]'>
            <Button className='bg-[#0A6847] text-white rounded-[16px] text-[16px] font-medium'>Weight</Button>
            <Button className='bg-[#0A6847] text-white rounded-[16px] text-[16px] font-medium'>Blood Pressure</Button>
            <Button className='bg-[#0A6847] text-white rounded-[16px] text-[16px] font-medium'>Diabetes</Button>
       </div>
       
    </div>
  )
}

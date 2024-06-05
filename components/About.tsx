import React from 'react'
import Image from 'next/image'
import logo from "@/assets/navbar/logo.png"
import healthy from "@/assets/about/healthy.png"
import wapp from "@/assets/about/whatsapp.svg"
import fb from "@/assets/about/facebook.svg"
import insta from "@/assets/about/instagram.svg"

export function About () {
  return (
    <div className='mt-[16px] h-[100px] bg-[#0A6847] flex items-center justify-center gap-x-[250px]'>
        <div>
            <Image src={healthy} alt="" />
        </div>
        <div className='flex flex-col items-center justify-center gap-y-[4px]'>
            <h1 className=' text-white text-[16px] font-medium'>Social Networks</h1>
            <div className='flex justify-center gap-x-[8px] items-center'>
                <div className='flex items-center justify-center rounded-[16px] bg-white w-[32px] h-[32px]'>
                    <Image src={wapp} alt=""  className='w-[24px] h-[24px]'/>
                </div>
                <div className='flex items-center justify-center rounded-[16px] bg-white w-[32px] h-[32px]'>
                    <Image src={fb} alt=""  className='w-[24px] h-[24px]'/>
                </div>
                <div className='flex items-center justify-center rounded-[16px] bg-white w-[32px] h-[32px]'>
                    <Image src={insta} alt=""  className='w-[24px] h-[24px]'/>
                </div>
            </div>
            <p className='text-white text-[16px] font-medium'>©Copyright2024. All rights reserved.</p>
        </div>
        <div>
            <Image src={logo} alt="" />
        </div>
    </div>
  )
}

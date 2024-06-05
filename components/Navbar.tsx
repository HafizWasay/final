import Image from 'next/image'
import React from 'react'
import logo from "@/assets/navbar/logo.png"
import { Button } from "@/components/ui/button"
 
export function Navbar () {
  return (
    <div className='bg-[#0A6847] h-[100px] flex items-center justify-center gap-x-[500px]'>
        <div>
            <Image src={logo} alt="" />
        </div>
        <div className='text-white '>
            <Button variant="link">Home</Button>
            <Button variant="link">Plan</Button>
            <Button variant="link">Blog</Button>
            <Button variant="link">Goods</Button>
            <Button variant="link">About</Button>
        </div>
    </div>
  )
}

'use client'
import React, { useEffect, useState } from 'react'
import p3 from "@/assets/home/p3.jpg"
import p2 from "@/assets/home/p2.jpg"
import p1 from "@/assets/home/p1.jpg"
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function HomePage () {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
 
    const images = [
      p1,
      p2,
      p3,
    ];

    const headings = [
        "\"Nourish your body, energize your spirit, and thrive in health\"",
        "\"Prioritize wellness today for a brighter, healthier tomorrow\"",
        "\"Every choice counts: move, nourish, and cherish your body\"",
      ];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 
        return () => clearInterval(interval);
      }, []);
    

  return (
    <div className='flex items-center justify-center mt-[16px] relative'>
       <Image src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} className='flex'/>
       <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-36">
            <h1 className="text-white text-center text-8xl font-bold">{headings[currentImageIndex]}</h1>
            <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="write a prompt" className="bg-white w-96 border-none rounded-[24px]"/>
            <AlertDialog>
              <AlertDialogTrigger type="submit" className="bg-[#0A6847] text-white rounded-[16px] w-[64px] h-[40px]">→</AlertDialogTrigger>
              <AlertDialogContent className='bg-white text-[#0A6847]'>
                <AlertDialogHeader>
                  <AlertDialogTitle>This will be the Heading</AlertDialogTitle>
                  <AlertDialogDescription>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of 
                  Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction className='bg-[#0A6847] text-white rounded-[16px] text-[16px] font-medium'>Get it!</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
        </div>
        </div>
    </div>
  )
}

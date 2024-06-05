import React from 'react';
import bg from "@/assets/plan/background.jpg";
import { Button } from './ui/button';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ClerkProvider } from '@clerk/nextjs';

export function Plan() {
  return (
    <div className='relative h-screen mt-[16px]'>
      <Image src={bg} alt='' layout="fill" objectFit="cover" className='absolute inset-0' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center divide-y bg-white flex flex-col '>
        <h1 className='text-[#0A6847] text-[64px] font-bold'>Get Your Weekly Plan</h1>
        <div className='flex items-center justify-center divide-x'>
          <div className='flex flex-col gap-y-[12px] items-center justify-start'>
            <h1>For better Experience:</h1>
                        <h1>Gender</h1>
                        <RadioGroup defaultValue="option-one" className='flex'>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">Male</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">Female</Label>
                            </div>
                        </RadioGroup>

                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Enter Your Age" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="dark">21-25</SelectItem>
                                <SelectItem value="system">26-30</SelectItem>
                                <SelectItem value="dark">31-35</SelectItem>
                                <SelectItem value="system">36-40</SelectItem>
                                <SelectItem value="dark">41-45</SelectItem>
                                <SelectItem value="system">46-50</SelectItem>
                                <SelectItem value="dark">51-55</SelectItem>
                                <SelectItem value="system">56-60</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Enter Your Weight" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="dark">41kg-50kg</SelectItem>
                                <SelectItem value="system">51kg-60kg</SelectItem>
                                <SelectItem value="dark">61kg-70kg</SelectItem>
                                <SelectItem value="system">71kg-80</SelectItem>
                                <SelectItem value="dark">81kg-90kg</SelectItem>
                                <SelectItem value="system">91kg-100kg</SelectItem>
                                <SelectItem value="dark">More than 100kg</SelectItem>
                            </SelectContent>
                        </Select>
                        <h1>Blood Pressure</h1>
                        <RadioGroup defaultValue="option-one" className='flex'>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">No</Label>
                            </div>
                        </RadioGroup>
                        <h1>Diabetes</h1>
                        <RadioGroup defaultValue="option-one" className='flex'>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">No</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex gap-x-[16px] items-center justify-center'>
                        <Button className='border border-[#0A6847] text-[#0A6847] rounded-[12px] font-semibold mt-[8px] hover:bg-white hover:text-[#0A6847]'>Weight Loss</Button>
                        <Button className='border border-[#0A6847] text-[#0A6847] rounded-[12px] font-semibold mt-[8px] hover:bg-white hover:text-[#0A6847]'>Weight Gain</Button>
                        <Button className='border border-[#0A6847] text-[#0A6847] rounded-[12px] font-semibold mt-[8px] hover:bg-white hover:text-[#0A6847]'>Maintain</Button>
                        </div>
                      
                        <div>
                          <Button className='flex border border-red-700'>Done</Button>
                        </div>
          </div>
          <div>
            <Table className='flex flex-col items-center justify-center'>
              <TableHeader>
                <TableRow>
                  <TableHead>Days</TableHead>
                  <TableHead>BreakFast</TableHead>
                  <TableHead>Lunch</TableHead>
                  <TableHead>Dinner</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Day1</TableCell>
                  <TableCell>Diet</TableCell>
                  <TableCell>Diet</TableCell>
                  <TableCell>Diet</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Day2</TableCell>
                  <TableCell>Diet</TableCell>
                  <TableCell>Diet</TableCell>
                  <TableCell>Diet</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Day3</TableCell>
                  <TableCell>Diet</TableCell>
                  <TableCell>Diet</TableCell>
                  <TableCell>Diet</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Day4</TableCell>
                  <TableCell>Diet</TableCell>
                  <TableCell>Diet</TableCell>
                  <TableCell>Diet</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Day5</TableCell>
                  <TableCell>Diet</TableCell>
                  <TableCell>Diet</TableCell>
                  <TableCell>Diet</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Day6</TableCell>
                  <TableCell>Diet</TableCell>
                  <TableCell>Diet</TableCell>
                  <TableCell>Diet</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Day7</TableCell>
                  <TableCell>Diet</TableCell>
                  <TableCell>Diet</TableCell>
                  <TableCell>Diet</TableCell>
                </TableRow>
              </TableBody>
            </Table>

          </div>
        </div>
        <ClerkProvider>

        <Button className='bg-[#0A6847] text-white px-8 py-4 rounded-md text-lg font-semibold'>Download</Button>

        </ClerkProvider>
      </div>
    </div>
  );
}
